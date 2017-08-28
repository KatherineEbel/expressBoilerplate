'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

var port = 3000;
var app = (0, _express2.default)();

app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
  // hard coding for simplicity
  res.json([{ "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" }, { "id": 2, "firstName": "Tammy", "lastName": "Norten", "email": "tnorton@yahoo.com" }, { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }]);
});

app.use(_express2.default.static(_path2.default.join(__dirname, '../dist')));
app.use(_compression2.default);

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening on port: ', port);
  (0, _open2.default)('http://localhost:' + port);
});