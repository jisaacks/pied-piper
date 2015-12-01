'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pipe;

var _proxy = require('./proxy');

var _proxy2 = _interopRequireDefault(_proxy);

var _piper = require('./piper');

var _piper2 = _interopRequireDefault(_piper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pipe(val) {
  return (0, _proxy2.default)((0, _piper2.default)(val));
}