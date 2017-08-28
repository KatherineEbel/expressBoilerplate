'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfig = require('../webpack.config.prod');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV = 'production'; /* eslint-disable no-console */


console.log(_chalk2.default.blue('Generating minified bundle for production This will be a moment...'));
(0, _webpack2.default)(_webpackConfig2.default).run(function (err, stats) {
  if (err) {
    console.log(_chalk2.default.red(err));
    return 1;
  }
  var jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(function (error) {
      return console.log(_chalk2.default.red(error));
    });
  }

  if (jsonStats.hasWarnings) {
    console.log(_chalk2.default.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(function (warning) {
      return console.log(_chalk2.default.yellow(warning));
    });
  }

  console.log('Webpack stats: ' + stats);

  // if we got this far, the build succeeded
  console.log(_chalk2.default.green('Your app has been built for production and written to /dist'));
  return 0;
});