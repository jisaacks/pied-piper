"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pipe;
function pipe(val) {
  return {
    valueOf: function valueOf() {
      return val;
    }
  };
}

