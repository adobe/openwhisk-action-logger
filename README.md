# Openwhisk Action Logger
> Logger for OpenWhisk actions.

## Status
[![GitHub license](https://img.shields.io/github/license/adobe/openwhisk-action-logger.svg)](https://github.com/adobe/openwhisk-action-logger/blob/master/LICENSE.txt)
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
const { logger, wrap } = require('@adobe/openwhisk-action-logger'};

async main(params) {
  //…my action code…
}

module.exports.main = wrap(main)
  .with(logger);
```


* [logger](#module_logger)
    * [~init(params, [logger])](#module_logger..init) ⇒
    * [~wrap(fn, params, [logger])](#module_logger..wrap) ⇒ <code>\*</code>
    * [~logger(fn, [logger])](#module_logger..logger) ⇒ <code>ActionFunction</code>

<a name="module_logger..init"></a>

### logger~init(params, [logger]) ⇒
Initializes helix-log and sets up external loggers. It also creates a bunyan-logger
if not already present on `params.__ow_logger`.

**Kind**: inner method of [<code>logger</code>](#module_logger)  
**Returns**: BunyanLogger A bunyan logger.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>\*</code> |  | openwhisk action params. |
| [logger] | <code>MultiLogger</code> | <code>rootLogger</code> | a helix multi logger. defaults to the helix                                            `rootLogger`. |

<a name="module_logger..wrap"></a>

### logger~wrap(fn, params, [logger]) ⇒ <code>\*</code>
Takes a main OpenWhisk function and intitializes logging, by invoking [init](init).
It logs invocation details on `trace` level before and after the actual action invocation.
it also creates a bunyan logger and binds it to the `__ow_logger` params.

**Kind**: inner method of [<code>logger</code>](#module_logger)  
**Returns**: <code>\*</code> - the return value of the action  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>ActionFunction</code> |  | original OpenWhisk action main function |
| params | <code>\*</code> |  | OpenWhisk action params |
| [logger] | <code>MultiLogger</code> | <code>rootLogger</code> | a helix multi logger. defaults to the helix                                            `rootLogger`. |

<a name="module_logger..logger"></a>

### logger~logger(fn, [logger]) ⇒ <code>ActionFunction</code>
Wrap function that returns an OpenWhisk function that is enabled with logging.

**Kind**: inner method of [<code>logger</code>](#module_logger)  
**Returns**: <code>ActionFunction</code> - a new function with the same signature as your original
                                      main function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fn | <code>ActionFunction</code> |  | original OpenWhisk action main function |
| [logger] | <code>MultiLogger</code> | <code>rootLogger</code> | a helix multi logger. defaults to the helix                                            `rootLogger`. |

**Example**  

```js
const { logger, wrap } = require('@adobe/openwhisk-action-logger'};

async main(params) {
  //…my action code…
}

module.exports.main = wrap(main)
  .with(logger);
```
