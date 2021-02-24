# OpenWhisk Action Logger
> Logger for OpenWhisk actions.

## Status
[![GitHub license](https://img.shields.io/github/license/adobe/openwhisk-action-logger.svg)](https://github.com/adobe/openwhisk-action-logger/blob/main/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/adobe/openwhisk-action-logger.svg)](https://github.com/adobe/openwhisk-action-logger/issues)
[![CircleCI](https://img.shields.io/circleci/project/github/adobe/openwhisk-action-logger.svg)](https://circleci.com/gh/adobe/openwhisk-action-logger)
[![codecov](https://img.shields.io/codecov/c/github/adobe/openwhisk-action-logger.svg)](https://codecov.io/gh/adobe/openwhisk-action-logger)
[![Greenkeeper badge](https://badges.greenkeeper.io/adobe/openwhisk-action-logger.svg)](https://greenkeeper.io/)
[![LGTM Code Quality Grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/adobe/openwhisk-action-logger.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/adobe/openwhisk-action-logger)

# API Reference
<a name="module_logger"></a>

## logger
Wrap function that returns an OpenWhisk function that is enabled with logging.

**Usage:**

```js
const { wrap } = require('@adobe/openwhisk-action-utils');
const { logger } = require('@adobe/openwhisk-action-logger');

async function main(params) {
  const { __ow_logger: log } = params;

  //…my action code…
  log.info('.....');
}

module.exports.main = wrap(main)
  .with(logger.trace)
  .with(logger);
```


* [logger](#module_logger)
    * [~init(args, [logger], [level])](#module_logger..init) ⇒ <code>SimpleInterface</code>
    * [~trace(fn)](#module_logger..trace) ⇒ <code>ActionFunction</code> \| <code>HEDYFunction</code>
    * [~logger(fn, [opts])](#module_logger..logger) ⇒ <code>ActionFunction</code> \| <code>HEDYFunction</code>

<a name="module_logger..init"></a>

### logger~init(args, [logger], [level]) ⇒ <code>SimpleInterface</code>
Initializes helix-log that adds additional activation related fields to the loggers.
It also looks for credential params and tries to add additional external logger
(eg. coralogix).

It also initializes `params.__ow_logger` with a SimpleInterface if not already present.

**Kind**: inner method of [<code>logger</code>](#module_logger)  
**Returns**: <code>SimpleInterface</code> - the helix-log simple interface  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| args | <code>\*</code> |  | openwhisk action params or function arguments. |
| [logger] | <code>MultiLogger</code> | <code>rootLogger</code> | a helix multi logger. defaults to the helix                                            `rootLogger`. |
| [level] | <code>string</code> |  | Overall log-level. defaults to `params.LOG_LEVEL` or 'info`. |

<a name="module_logger..trace"></a>

### logger~trace(fn) ⇒ <code>ActionFunction</code> \| <code>HEDYFunction</code>
Creates a tracer function that logs invocation details on `trace` level before and after the
actual action invocation.

**Kind**: inner method of [<code>logger</code>](#module_logger)  
**Returns**: <code>ActionFunction</code> \| <code>HEDYFunction</code> - an action function instrumented with tracing.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>ActionFunction</code> \| <code>HEDYFunction</code> | original OpenWhisk action main function |

<a name="module_logger..logger"></a>

### logger~logger(fn, [opts]) ⇒ <code>ActionFunction</code> \| <code>HEDYFunction</code>
Wrap function that returns an OpenWhisk function that is enabled with logging.

**Kind**: inner method of [<code>logger</code>](#module_logger)  
**Returns**: <code>ActionFunction</code> \| <code>HEDYFunction</code> - a new function with the same signature as your original
                                       main function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>ActionFunction</code> \| <code>HEDYFunction</code> |  | original OpenWhisk action main function |
| [opts] | <code>object</code> |  | Additional wrapping options |
| [opts.fields] | <code>object</code> |  | Additional fields to log with the `ow` logging fields. |
| [opts.logger] | <code>MultiLogger</code> | <code>rootLogger</code> | a helix multi logger. defaults to the helix                                            `rootLogger`. |

**Example**  

```js
const { wrap } = require('@adobe/openwhisk-action-utils');
const { logger } = require('@adobe/openwhisk-action-logger');

async function main(params) {
  const { __ow_logger: log } = params;

  //…my action code…
  log.info('.....');
}

module.exports.main = wrap(main)
  .with(logger.trace)
  .with(logger);
```
