"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pipe;
function pipe(val) {

  var chain = [val];

  return {
    valueOf: function valueOf() {
      return chain.reduce(function (a, b) {
        return b(a);
      });
    },
    to: function to(func) {
      chain.push(func);
      return this;
    }
  };
}

