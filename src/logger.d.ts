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

import { ActionFunction } from '@adobe/openwhisk-action-utils';
import { MultiLogger, SimpleInterface } from '@adobe/helix-log';

/**
 * Fetch Request
 */
export declare class Request {}

/**
 * Fetch Response
 */
export declare class Response {}

/**
 * Helix Deploy Context
 */
export declare class HEDYContext {}

/**
 * Helix Deploy Function
 */
export declare type HEDYFunction = (req: Request, context: HEDYContext) => Response;

/**
 * Options for the wrap functions
 */
declare interface WrapOptions {

  /**
   * Helix multi logger. defaults to the helix `rootLogger`.
   */
  logger?: MultiLogger,

  /**
   * Additional fields to log with the `ow` logging fields.
   */
  fields?: object,

  /**
   * Overall log level. defaults to `params.LOG_LEVEL` or 'info`
   */
  level?: string,
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
 * @param {ActionFunction|HEDYFunction} fn - original OpenWhisk or helix deploy main function
 * @param {WrapOptions} [opts] - optional options.
 * @returns {ActionFunction} a new function with the same signature as your original main function
 */
export declare function logger(fn: ActionFunction|HEDYFunction, opts: WrapOptions): ActionFunction;

export declare namespace logger {
  /**
   * Initializes helix-log and sets up external loggers. It also creates a bunyan-logger
   * if not already present on `params.__ow_logger`.
   *
   * @param {*} params - openwhisk action params.
   * @param {MultiLogger} [logger=rootLogger] - a helix multi logger. defaults to the helix
   *                                            `rootLogger`.
   * @param {string} level - Overall log-level. defaults to `params.LOG_LEVEL` or 'info`.
   * @returns BunyanLogger a bunyan logger.
   */
  export function init(params: object, logger: MultiLogger, level?: string): SimpleInterface;

  /**
   * Creates a tracer function that logs invocation details on `trace` level before and after the
   * actual action invocation.
   *
   * @param {ActionFunction} fn - original OpenWhisk action main function
   * @returns {ActionFunction} an action function instrumented with tracing.
   */
  export function trace(fn: ActionFunction): ActionFunction;
}
