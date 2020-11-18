## [2.2.2](https://github.com/adobe/openwhisk-action-logger/compare/v2.2.1...v2.2.2) (2020-11-18)


### Bug Fixes

* **deps:** update dependency @adobe/helix-log to v4.5.3 ([#93](https://github.com/adobe/openwhisk-action-logger/issues/93)) ([f662434](https://github.com/adobe/openwhisk-action-logger/commit/f6624345f8914b18a5f4a583ee748bf7d6abc07f))

## [2.2.1](https://github.com/adobe/openwhisk-action-logger/compare/v2.2.0...v2.2.1) (2020-10-12)


### Bug Fixes

* **deps:** update dependency @adobe/helix-log to v4.5.2 ([d2057aa](https://github.com/adobe/openwhisk-action-logger/commit/d2057aa5234380aac049b8ef32f80e5d2326e76f))

# [2.2.0](https://github.com/adobe/openwhisk-action-logger/compare/v2.1.1...v2.2.0) (2020-03-04)


### Features

* **log:** log the url (from X-CDN-URL header) ([f202edf](https://github.com/adobe/openwhisk-action-logger/commit/f202edf9e48af33e76fc8e7c67a159d91b712fb4))

## [2.1.1](https://github.com/adobe/openwhisk-action-logger/compare/v2.1.0...v2.1.1) (2020-02-25)


### Bug Fixes

* **deps:** update dependency @adobe/helix-log to v4.5.1 ([42ddf19](https://github.com/adobe/openwhisk-action-logger/commit/42ddf19a829141227004b321ed6b9ae71adcad4d))

# [2.1.0](https://github.com/adobe/openwhisk-action-logger/compare/v2.0.4...v2.1.0) (2020-01-31)


### Features

* **logger:** allow to set overall log level ([#33](https://github.com/adobe/openwhisk-action-logger/issues/33)) ([247b494](https://github.com/adobe/openwhisk-action-logger/commit/247b494057db9a0431f3581e4fca6659335561e2)), closes [#32](https://github.com/adobe/openwhisk-action-logger/issues/32)

## [2.0.4](https://github.com/adobe/openwhisk-action-logger/compare/v2.0.3...v2.0.4) (2020-01-22)


### Bug Fixes

* **logger:** remove unused config ([#29](https://github.com/adobe/openwhisk-action-logger/issues/29)) ([d5778c8](https://github.com/adobe/openwhisk-action-logger/commit/d5778c8c39f09957657ee5061f6eda1e7c75ad05)), closes [#28](https://github.com/adobe/openwhisk-action-logger/issues/28) [#25](https://github.com/adobe/openwhisk-action-logger/issues/25)

## [2.0.3](https://github.com/adobe/openwhisk-action-logger/compare/v2.0.2...v2.0.3) (2020-01-09)


### Bug Fixes

* **deps:** update dependency @adobe/helix-log to v4.4.2 ([#22](https://github.com/adobe/openwhisk-action-logger/issues/22)) ([fca51f4](https://github.com/adobe/openwhisk-action-logger/commit/fca51f4b43742e01ebad0785ae958c9285cc5426))

## [2.0.2](https://github.com/adobe/openwhisk-action-logger/compare/v2.0.1...v2.0.2) (2019-12-18)


### Bug Fixes

* **deps:** update dependency @adobe/helix-log to v4.4.1 ([e7aebb5](https://github.com/adobe/openwhisk-action-logger/commit/e7aebb57a55440656d3b250c6ea575d40258d51c))
* **logger:** ensure that log methods are bound to simple log interface ([#18](https://github.com/adobe/openwhisk-action-logger/issues/18)) ([5240291](https://github.com/adobe/openwhisk-action-logger/commit/524029107cae7574e340b37075f464bd6c93a8e7)), closes [#17](https://github.com/adobe/openwhisk-action-logger/issues/17)

## [2.0.1](https://github.com/adobe/openwhisk-action-logger/compare/v2.0.0...v2.0.1) (2019-12-16)


### Bug Fixes

* **deps:** update dependency @adobe/helix-log to v4.2.0 ([dd7cf4c](https://github.com/adobe/openwhisk-action-logger/commit/dd7cf4c78b1bdcf5499242d65e1d032b099dad54))
* **deps:** update dependency @adobe/helix-log to v4.3.0 ([df0da45](https://github.com/adobe/openwhisk-action-logger/commit/df0da452bdb13005ba581d539146e11b9d60e271))
* **deps:** update dependency @adobe/helix-log to v4.4.0 ([8155f77](https://github.com/adobe/openwhisk-action-logger/commit/8155f77d2168037ef7a22b8e4edcb048ff746b9c))

# [2.0.0](https://github.com/adobe/openwhisk-action-logger/compare/v1.0.1...v2.0.0) (2019-11-25)


### Features

* **logging:** use cls-hooked to allow for custom non-env based fields ([f4daaf8](https://github.com/adobe/openwhisk-action-logger/commit/f4daaf8a204689f613a840dec96f088d147ee7e6))
* **logging:** use SimpleInterface instead of bunyan logger ([7561771](https://github.com/adobe/openwhisk-action-logger/commit/75617714c0867aca79575110caaddf610f3ea5dd))


### BREAKING CHANGES

* **logging:** the params.__ow_logger is no longer a bunyan logger but a
                 helix-log SimpleInterface
* **logging:** the wrap() function no longer sets up tracing. this moved
                 to logger.trace
                 Further more, the wrap() and wrapper() signature has changed
                 using an option object instead of arguments.

## [1.0.1](https://github.com/adobe/openwhisk-action-logger/compare/v1.0.0...v1.0.1) (2019-11-24)


### Bug Fixes

* **deps:** update dependency @adobe/helix-log to v4.1.0 ([e2fa373](https://github.com/adobe/openwhisk-action-logger/commit/e2fa373c68f4363d357016aff77fb298852da0d6))

# 1.0.0 (2019-11-22)


### Bug Fixes

* **build:** instruct webpack to use correct __dirname ([#47](https://github.com/adobe/openwhisk-action-logger/issues/47)) ([36d9242](https://github.com/adobe/openwhisk-action-logger/commit/36d9242bfa8a7f51c404d141413115699fb9b541)), closes [#39](https://github.com/adobe/openwhisk-action-logger/issues/39)
* **builder:** fix error when linking with [@ci](https://github.com/ci) ([02a47a5](https://github.com/adobe/openwhisk-action-logger/commit/02a47a5e586cc585a8e6970c447b7d29c2d68963))
* **builder:** remove externals that are not really present ([61bbaa8](https://github.com/adobe/openwhisk-action-logger/commit/61bbaa8329c46990a6c0e912e90b070f059f156e))
* **builder:** set process.exitCode on failure ([35c7dbd](https://github.com/adobe/openwhisk-action-logger/commit/35c7dbdd91363e42e7b2f51f01367b0e58cbdd9d)), closes [#34](https://github.com/adobe/openwhisk-action-logger/issues/34)
* **builder:** signal error during sequence updates ([d239066](https://github.com/adobe/openwhisk-action-logger/commit/d239066e1e4b3533f11f9c94714aff99f9dcab35)), closes [#53](https://github.com/adobe/openwhisk-action-logger/issues/53)
* **ci:** trigger release ([f253966](https://github.com/adobe/openwhisk-action-logger/commit/f2539666d4cd0167037477f15bda9b17fa705ba7))
* **cli:** correct usage of yargs ([53195be](https://github.com/adobe/openwhisk-action-logger/commit/53195be1f7bfa356a7132fec0c7b6a6df21645a4))
* **cli:** default to nodejs:10 container ([19a0c3d](https://github.com/adobe/openwhisk-action-logger/commit/19a0c3d8f1945a600f328feae3e6fbbee51f475d)), closes [#18](https://github.com/adobe/openwhisk-action-logger/issues/18)
* **cli:** prefer process.env over .wskprops ([#46](https://github.com/adobe/openwhisk-action-logger/issues/46)) ([c9eb849](https://github.com/adobe/openwhisk-action-logger/commit/c9eb849343a6f0a387f74a88696b64df30290842)), closes [#42](https://github.com/adobe/openwhisk-action-logger/issues/42)
* **dep:** update dependencies ([53878a0](https://github.com/adobe/openwhisk-action-logger/commit/53878a011c35f433fff0333bfae70852a08e0421))
* **deps:** update dependencies ([5a9b8cb](https://github.com/adobe/openwhisk-action-logger/commit/5a9b8cbbf0c198c6e50807133a260c6d5286313f))
* **deps:** update helix-log ([7b7914c](https://github.com/adobe/openwhisk-action-logger/commit/7b7914caefe165d1762c247e13053fe17be8cf53))
* **deps:** update to helix-log@4.0.0 ([#38](https://github.com/adobe/openwhisk-action-logger/issues/38)) ([e655096](https://github.com/adobe/openwhisk-action-logger/commit/e6550967307d7b11871fe5853b048ff25862b4de))
* **express:** ensure req.body is a string ([c40897a](https://github.com/adobe/openwhisk-action-logger/commit/c40897af5995b63d3174cabc909e53c39fd7f871)), closes [#15](https://github.com/adobe/openwhisk-action-logger/issues/15)
* **expressify:** fallback to application/octet-stream if no content-type provided ([8d69dcc](https://github.com/adobe/openwhisk-action-logger/commit/8d69dcc1ad7b650ae5626bc20cc80491087bb563))
* **expressify:** send body as raw data ([#17](https://github.com/adobe/openwhisk-action-logger/issues/17)) ([157e88c](https://github.com/adobe/openwhisk-action-logger/commit/157e88c6cfd834860515dfd396edbbe446a0d085)), closes [#16](https://github.com/adobe/openwhisk-action-logger/issues/16)
* **external:** declare all openwhisk files as external ([2271598](https://github.com/adobe/openwhisk-action-logger/commit/2271598b475dc5b0415b9f60738ba955504c97d1)), closes [#54](https://github.com/adobe/openwhisk-action-logger/issues/54)
* **log:** papertrail log level is not initialized correctly ([#19](https://github.com/adobe/openwhisk-action-logger/issues/19)) ([1647f2d](https://github.com/adobe/openwhisk-action-logger/commit/1647f2d5f26ebd3408b1327282430c34e34b9497))
* **log:** upgrade to helix-log 3.0.0 ([c553378](https://github.com/adobe/openwhisk-action-logger/commit/c5533789f8b106878a385dba00366fe531cddf87))
* **logger:** be robust if __ow_logger is not a bunyan logger ([#40](https://github.com/adobe/openwhisk-action-logger/issues/40)) ([fda5b28](https://github.com/adobe/openwhisk-action-logger/commit/fda5b282ff0b47f17b77cde57def1f06b8f346d1)), closes [#39](https://github.com/adobe/openwhisk-action-logger/issues/39)
* **logger:** external bunyan logger is not forwarded to helix-log ([9ee97fd](https://github.com/adobe/openwhisk-action-logger/commit/9ee97fdaf38b56e4ff3860ad5ca740653188a6fe))
* **logger:** use latest helix-log ([#15](https://github.com/adobe/openwhisk-action-logger/issues/15)) ([03488e0](https://github.com/adobe/openwhisk-action-logger/commit/03488e09987b1759838313afed9c43596e77e897))
* **logging:** move log helpers to own export ([#12](https://github.com/adobe/openwhisk-action-logger/issues/12)) ([01a44b4](https://github.com/adobe/openwhisk-action-logger/commit/01a44b44004d6772f8368047560eb52ba03493c0))
* **package:** update fs-extra to version 8.0.0 ([fd2869d](https://github.com/adobe/openwhisk-action-logger/commit/fd2869da623a00d9adee02d7f87a93f7c408ed5b))
* **wrap:** enable concurrent wrappers ([cdda6b7](https://github.com/adobe/openwhisk-action-logger/commit/cdda6b705374c3e301884b77c77845b970379825)), closes [/github.com/adobe/openwhisk-action-utils/pull/29#discussion_r343393239](https://github.com//github.com/adobe/openwhisk-action-utils/pull/29/issues/discussion_r343393239)


### Features

* **api:** add new expressify helper to support serverless-http ([#14](https://github.com/adobe/openwhisk-action-logger/issues/14)) ([50dbae3](https://github.com/adobe/openwhisk-action-logger/commit/50dbae3d9d782da80871e838f8e0bdcb5e9d601d)), closes [#13](https://github.com/adobe/openwhisk-action-logger/issues/13)
* **builder:** add option to generate link to [@ci](https://github.com/ci) ([#56](https://github.com/adobe/openwhisk-action-logger/issues/56)) ([8d1ae73](https://github.com/adobe/openwhisk-action-logger/commit/8d1ae73dafdb4e00a6626fe041a0c0ea25ec91c9))
* **builder:** add possibility to specify test url ([e450a85](https://github.com/adobe/openwhisk-action-logger/commit/e450a85054fd9878ad97a2877bfa0918067bb7b3)), closes [#51](https://github.com/adobe/openwhisk-action-logger/issues/51)
* **builder:** allow extension of webpack config ([0e03766](https://github.com/adobe/openwhisk-action-logger/commit/0e0376632525c6ee8b7babbf2dad2b2fb7d4a620)), closes [#30](https://github.com/adobe/openwhisk-action-logger/issues/30)
* **builder:** create option to create symlinks ([fbf37e4](https://github.com/adobe/openwhisk-action-logger/commit/fbf37e463151c6c42ee8d5171469a852fbfad716)), closes [#48](https://github.com/adobe/openwhisk-action-logger/issues/48)
* **builder:** use version from package json in action name ([3717eca](https://github.com/adobe/openwhisk-action-logger/commit/3717ecaec4310be3f98f3b21d5a622f076b67557)), closes [#49](https://github.com/adobe/openwhisk-action-logger/issues/49)
* **chain:** expose `chain` function in module root ([e8c9548](https://github.com/adobe/openwhisk-action-logger/commit/e8c9548a42cf776b795d23de17b61a6e115c1fad))
* **chain:** provide action chaining mechanism ([0ece0ee](https://github.com/adobe/openwhisk-action-logger/commit/0ece0ee863739e68f2c801ac9f8c0fee4a0c3240)), closes [#25](https://github.com/adobe/openwhisk-action-logger/issues/25)
* **cli:** add default externals for node:10 container ([#28](https://github.com/adobe/openwhisk-action-logger/issues/28)) ([28daad1](https://github.com/adobe/openwhisk-action-logger/commit/28daad1ed01d66ffe74eaba2e5204192b1b745d0)), closes [#27](https://github.com/adobe/openwhisk-action-logger/issues/27)
* **cli:** allow to create or update openwhisk package ([721b590](https://github.com/adobe/openwhisk-action-logger/commit/721b590c3dc42d6765b39fb5b52e1576f2e345bc)), closes [#23](https://github.com/adobe/openwhisk-action-logger/issues/23)
* **cli:** bundled package.json should have version set to host package version ([dccaf27](https://github.com/adobe/openwhisk-action-logger/commit/dccaf27bd028dc7a36a0444c4f54051e06929538)), closes [#5](https://github.com/adobe/openwhisk-action-logger/issues/5)
* **config:** support to specify file content in env variables ([#25](https://github.com/adobe/openwhisk-action-logger/issues/25)) ([e47f0e2](https://github.com/adobe/openwhisk-action-logger/commit/e47f0e22e47a83282e4133959e7c71ab7e67b6e0)), closes [#22](https://github.com/adobe/openwhisk-action-logger/issues/22)
* **docs:** Add `index.d.ts` with interfaces for exported classes and arguments ([#37](https://github.com/adobe/openwhisk-action-logger/issues/37)) ([c4f21a8](https://github.com/adobe/openwhisk-action-logger/commit/c4f21a85ccaa2e1ce5845ccc0b6c127039a375e7)), closes [#30](https://github.com/adobe/openwhisk-action-logger/issues/30)
* **expressify:** ensure empty or missing __ow_path defaults to '/' ([ed4f15e](https://github.com/adobe/openwhisk-action-logger/commit/ed4f15e4104935a41b8b7a26b885962ff0af4499))
* **expressify:** set isBase64Encoded flag correctly to ensure proper decoding ([e555c6e](https://github.com/adobe/openwhisk-action-logger/commit/e555c6e1ee028db220f7d17811a58ff25de15b16))
* **initial:** clean up old utils ([6bf0d86](https://github.com/adobe/openwhisk-action-logger/commit/6bf0d8651b71c56a0b20bf0feedb9df978a0c377))
* **log:** remove loggly logger ([#12](https://github.com/adobe/openwhisk-action-logger/issues/12)) ([03ec0a7](https://github.com/adobe/openwhisk-action-logger/commit/03ec0a784c77c93c1ef656dd2f954443736c7b26)), closes [#11](https://github.com/adobe/openwhisk-action-logger/issues/11)
* **logger:** add support for coralogix and helix-log ([2e53653](https://github.com/adobe/openwhisk-action-logger/commit/2e5365352e6770511a66b772290447234cc75a57)), closes [#6](https://github.com/adobe/openwhisk-action-logger/issues/6) [#7](https://github.com/adobe/openwhisk-action-logger/issues/7)
* **logger:** convert papertrail stream to helix logger ([#14](https://github.com/adobe/openwhisk-action-logger/issues/14)) ([8fdc230](https://github.com/adobe/openwhisk-action-logger/commit/8fdc2305185a149ceaa9810ae1b8fdc4dab426ca)), closes [#13](https://github.com/adobe/openwhisk-action-logger/issues/13)
* **logger:** create wrap function that creates a __ow_logger ([9cf11b0](https://github.com/adobe/openwhisk-action-logger/commit/9cf11b044bf45574266cedadfe323c3b46cefb58))
* **logger:** improve logging ([#32](https://github.com/adobe/openwhisk-action-logger/issues/32)) ([fa899a9](https://github.com/adobe/openwhisk-action-logger/commit/fa899a9da33393c5731921a35eb263f116835088)), closes [#31](https://github.com/adobe/openwhisk-action-logger/issues/31) [#26](https://github.com/adobe/openwhisk-action-logger/issues/26)
* **logger:** make logger to be usable in with the new `wrap` tool ([#36](https://github.com/adobe/openwhisk-action-logger/issues/36)) ([08f6574](https://github.com/adobe/openwhisk-action-logger/commit/08f6574b63cab445d8d31b355f9c111ac5adc657)), closes [#35](https://github.com/adobe/openwhisk-action-logger/issues/35)
* **logging:** Adding logging helpers ([#11](https://github.com/adobe/openwhisk-action-logger/issues/11)) ([c1e5d50](https://github.com/adobe/openwhisk-action-logger/commit/c1e5d504a897959a62ec43ca1bcc7176aec030cc)), closes [#9](https://github.com/adobe/openwhisk-action-logger/issues/9)
* **openwhisk:** add new `--timeout` limit option ([936880d](https://github.com/adobe/openwhisk-action-logger/commit/936880da18dd1e155c0ba0a2c57b841c6968fefa)), closes [#37](https://github.com/adobe/openwhisk-action-logger/issues/37)
* **papertrail:** add TLS support ([#10](https://github.com/adobe/openwhisk-action-logger/issues/10)) ([b18a774](https://github.com/adobe/openwhisk-action-logger/commit/b18a774224bc5ab48d687604d099849ee34ccc3a)), closes [#9](https://github.com/adobe/openwhisk-action-logger/issues/9)
* **utils:** add commonly needed middleware ([d593933](https://github.com/adobe/openwhisk-action-logger/commit/d59393304ea34fac9f9df161be42a9b431df25af))
* **utils:** create standalone library ([94030cd](https://github.com/adobe/openwhisk-action-logger/commit/94030cd5af88c58653d222d3fa45ded9d29c3cec))
* **wrap:** enable alternative syntax ([ee10906](https://github.com/adobe/openwhisk-action-logger/commit/ee10906b23951b1f426fc40a9016095d7f9f38fe))
* **wrap:** support rest args for wrappers ([ac3d806](https://github.com/adobe/openwhisk-action-logger/commit/ac3d806b8434acb572c83fd23212569db055d654)), closes [/github.com/adobe/openwhisk-action-utils/pull/29#discussion_r343392926](https://github.com//github.com/adobe/openwhisk-action-utils/pull/29/issues/discussion_r343392926)


### BREAKING CHANGES

* **logger:** The exported `logger` is no longer a function but exports an object.

The exported object contains 2 function that explicitely deal with setting up helix-log
and/or bunyan logging to be used with openwhisk.
* **expressify:** the __ow_body doesn't need to be decoded manually anymore
