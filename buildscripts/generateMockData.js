'use strict';

var _jsonSchemaFaker = require('json-schema-faker');

var _jsonSchemaFaker2 = _interopRequireDefault(_jsonSchemaFaker);

var _mockDataSchema = require('./mockDataSchema');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

var json = JSON.stringify((0, _jsonSchemaFaker2.default)(_mockDataSchema.schema));

_fs2.default.writeFile('./src/api/db.json', json, function (err) {
  if (err) {
    return console.log(_chalk2.default.red(err));
  } else {
    console.log(_chalk2.default.green('Mock data generated'));
  }
});