"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = piper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function piper(val) {
  var _ref;

  var chain = [val];

  return _ref = {}, _defineProperty(_ref, Symbol.toPrimitive, function (hint) {
    var val = this.valueOf();

    if (hint === "number") {
      return Number(val);
    }
    if (hint === "string") {
      return String(val);
    }
    return val;
  }), _defineProperty(_ref, "toString", function toString() {
    return String(this.valueOf());
  }), _defineProperty(_ref, "valueOf", function valueOf() {
    var next = chain.reduce(function (a, b) {
      return b(a);
    });
    chain = [next];
    return next;
  }), _defineProperty(_ref, "to", function to(func) {
    chain.push(func);
    return this;
  }), _ref;
}