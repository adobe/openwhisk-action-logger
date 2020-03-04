/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/* eslint-disable no-underscore-dangle */

/**
 * Wrap function that returns an OpenWhisk function that is enabled with logging.
 *
 * **Usage:**
 *
 * ```js
 * const { wrap } = require('@adobe/openwhisk-action-utils');
 * const { logger } = require('@adobe/openwhisk-action-logger');
 *
 * async function main(params) {
 *   const { __ow_logger: log } = params;
 *
 *   //…my action code…
 *   log.info('.....');
 * }
 *
 * module.exports.main = wrap(main)
 *   .with(logger.trace)
 *   .with(logger);
 * ```
 *
 * @module logger
 */

const http = require('http');
const {
  rootLogger, JsonifyForLog, MultiLogger, SimpleInterface, messageFormatSimple, ConsoleLogger,
} = require('@adobe/helix-log');
const { createNamespace } = require('cls-hooked');

const createPapertrailLogger = require('./logger-papertrail');
const createCoralogixLogger = require('./logger-coralogix');

const CLS_NAMESPACE_NAME = 'ow-util-logger';
const LOGGER_OW_FIELDS_NAME = 'ow-fields';
const LOGGER_CDN_FIELDS_NAME = 'cdn-fields';

const CLS_NAMESPACE = createNamespace(CLS_NAMESPACE_NAME);

// define special 'serializers' for express request
JsonifyForLog.impl(http.IncomingMessage, (req) => ({
  method: req.method,
  url: req.url,
  headers: req.headers,
}));

// define special 'serializers' for express response
JsonifyForLog.impl(http.ServerResponse, (res) => {
  if (!res || !res.statusCode) {
    return res;
  }
  return {
    statusCode: res.statusCode,
    duration: res.duration,
    headers: res.getHeaders(),
  };
});

/**
 * Special logger for openwhisk actions that adds the activation id, action name and
 * transaction id to each log message.
 * @private
 */
class OpenWhiskLogger extends MultiLogger {
  constructor(logger, opts) {
    super(logger, {
      ...opts,
      filter: (fields) => {
        const ret = {
          ...fields,
        };

        const ow = CLS_NAMESPACE.get(LOGGER_OW_FIELDS_NAME);
        if (ow) {
          ret.ow = ow;
        }

        const cdn = CLS_NAMESPACE.get(LOGGER_CDN_FIELDS_NAME);
        if (cdn) {
          ret.cdn = cdn;
        }

        return ret;
      },
    });
  }
}

/**
 * Initializes helix-log that adds additional activation related fields to the loggers.
 * It also looks for credential params and tries to add additional external logger
 * (eg. coralogix, papertrail).
 *
 * It also initializes `params.__ow_logger` with a SimpleInterface if not already present.
 *
 * @param {*} params - openwhisk action params.
 * @param {MultiLogger} [logger=rootLogger] - a helix multi logger. defaults to the helix
 *                                            `rootLogger`.
 * @param {string} [level] - Overall log-level. defaults to `params.LOG_LEVEL` or 'info`.
 * @return {SimpleInterface} the helix-log simple interface
 */
function init(params, logger = rootLogger, level) {
  // add openwhisklogger to helix-log logger
  if (!logger.loggers.has('OpenWhiskLogger')) {
    const owLogger = new OpenWhiskLogger({});
    logger.loggers.set('OpenWhiskLogger', owLogger);

    // add coralogix logger
    const coralogix = createCoralogixLogger(params);
    if (coralogix) {
      owLogger.loggers.set('CoralogixLogger', coralogix);
      // eslint-disable-next-line no-console
      console.log('configured coralogix logger.');
    }

    // add papertail logger
    const papertrail = createPapertrailLogger(params);
    if (papertrail) {
      owLogger.loggers.set('PapertraiLogger', papertrail);
      // eslint-disable-next-line no-console
      console.log('configured papertrail logger.');
    }
  }

  // ensure console logger is setup correctly
  if (logger === rootLogger) {
    logger.loggers.set('default', new ConsoleLogger({
      formatter: messageFormatSimple,
      level: 'trace',
    }));
  }

  // create SimpleInterface if needed
  if (!params.__ow_logger) {
    const simple = new SimpleInterface({
      logger,
      level: level || params.LOG_LEVEL || 'info',
    });
    // bind log methods to logger itself, so it's easier to pass them as functions.
    ['log', 'silly', 'trace', 'debug', 'verbose', 'info', 'warn', 'error', 'fatal'].forEach((n) => {
      simple[n] = simple[n].bind(simple);
    });
    // eslint-disable-next-line no-param-reassign
    params.__ow_logger = simple;
  }
  return params.__ow_logger;
}

/**
 * Takes a main OpenWhisk function and intitializes logging, by invoking {@link init}.
 *
 * @param {ActionFunction} fn - original OpenWhisk action main function
 * @param {*} params - OpenWhisk action params
 * @param {object} [opts] - Additional wrapping options
 * @param {object} [opts.fields] - Additional fields to log with the `ow` logging fields.
 * @param {MultiLogger} [opts.logger=rootLogger] - a helix multi logger. defaults to the helix
 *                                            `rootLogger`.
 * @param {string} [opts.level] - Overall log-level. defaults to `params.LOG_LEVEL` or 'info`.
 * @private
 * @returns {*} the return value of the action
 */
async function wrap(fn, params = {}, { logger = rootLogger, fields = {}, level } = {}) {
  return CLS_NAMESPACE.runAndReturn(() => {
    CLS_NAMESPACE.set(LOGGER_OW_FIELDS_NAME, {
      activationId: process.env.__OW_ACTIVATION_ID || 'n/a',
      actionName: process.env.__OW_ACTION_NAME || 'n/a',
      transactionId: process.env.__OW_TRANSACTION_ID || 'n/a',
      ...fields,
    });

    if (params.__ow_headers && params.__ow_headers['x-cdn-url']) {
      const url = params.__ow_headers['x-cdn-url'];
      CLS_NAMESPACE.set(LOGGER_CDN_FIELDS_NAME, {
        url,
      });
    }

    init(params, logger, level);
    return fn(params);
  });
}

/**
 * Creates a tracer function that logs invocation details on `trace` level before and after the
 * actual action invocation.
 *
 * @param {ActionFunction} fn - original OpenWhisk action main function
 * @returns {ActionFunction} an action function instrumented with tracing.
 */
function trace(fn) {
  return async (params) => {
    try {
      const disclosedParams = { ...params };
      Object.keys(disclosedParams)
        .forEach((key) => {
          if (key.match(/^[A-Z0-9_]+$/)) {
            delete disclosedParams[key];
          }
        });
      delete disclosedParams.__ow_logger;
      const { __ow_logger: log } = params;
      // be a bit compatible
      const trc = log.traceFields ? (f, m) => log.traceFields(m, f) : log.trace;
      const err = log.errorFields ? (f, m) => log.errorFields(m, f) : log.error;
      try {
        trc({
          params: disclosedParams,
        }, 'before');
        const result = await fn(params);
        trc({
          result,
        }, 'result');
        return result;
      } catch (e) {
        err({
          params: disclosedParams,
          error: e,
        }, 'error');
        return {
          statusCode: e.statusCode || 500,
        };
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      return {
        statusCode: e.statusCode || 500,
      };
    }
  };
}

/**
 * Wrap function that returns an OpenWhisk function that is enabled with logging.
 *
 * @example <caption></caption>
 *
 * ```js
 * const { wrap } = require('@adobe/openwhisk-action-utils');
 * const { logger } = require('@adobe/openwhisk-action-logger');
 *
 * async function main(params) {
 *   const { __ow_logger: log } = params;
 *
 *   //…my action code…
 *   log.info('.....');
 * }
 *
 * module.exports.main = wrap(main)
 *   .with(logger.trace)
 *   .with(logger);
 * ```
 *
 * @function logger
 * @param {ActionFunction} fn - original OpenWhisk action main function
 * @param {object} [opts] - Additional wrapping options
 * @param {object} [opts.fields] - Additional fields to log with the `ow` logging fields.
 * @param {MultiLogger} [opts.logger=rootLogger] - a helix multi logger. defaults to the helix
 *                                            `rootLogger`.
 * @returns {ActionFunction} a new function with the same signature as your original main function
 */
function wrapper(fn, opts) {
  return (params) => wrap(fn, params, opts);
}

module.exports = Object.assign(wrapper, {
  init,
  trace,
});
