"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = proxy;

var _piper = require("./piper");

var _piper2 = _interopRequireDefault(_piper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DIRECT = new Set(Object.getOwnPropertyNames((0, _piper2.default)({})));

function proxy(obj) {
  if (typeof Proxy !== "undefined") {
    var handler = {
      get: function get(target, prop) {
        if (DIRECT.has(prop)) {
          return target[prop];
        }
        return target.valueOf()[prop];
      },
      set: function set(target, prop, value) {
        return target.valueOf()[prop] = value;
      },
      has: function has(target, prop) {
        return prop in target.valueOf();
      },
      enumerate: function enumerate(target) {
        return target.valueOf()[Symbol.iterator]();
      },
      ownKeys: function ownKeys(target) {
        return Object.getOwnPropertyNames(target.valueOf());
      },

      // getOwnPropertyDescriptor(target, prop) {
      //   console.log('getting', prop, 'on', target.valueOf());
      //   return Object.getOwnPropertyDescriptor(target.valueOf(), prop);
      // },

      getPrototypeOf: function getPrototypeOf(target) {
        return Object.getPrototypeOf(target.valueOf());
      },
      setPrototypeOf: function setPrototypeOf(target, proto) {
        return Object.setPrototypeOf(target.valueOf(), proto);
      },
      isExtensible: function isExtensible(target) {
        return Object.isExtensible(target.valueOf());
      },
      preventExtensions: function preventExtensions(target) {
        return Object.preventExtensions(target.valueOf());
      },
      defineProperty: function defineProperty(target, prop, descriptor) {
        return Object.defineProperty(target.valueOf(), prop, descriptor);
      },
      deleteProperty: function deleteProperty(target, prop) {
        delete target.valueOf()[prop];
      },
      apply: function apply(target, context, args) {
        return target.valueOf().apply(context, args);
      },
      construct: function construct(target, args) {
        return new target.valueOf()(args);
      }
    };

    return new Proxy(obj, handler);
  } else {
    return obj;
  }
}