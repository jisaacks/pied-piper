import piper from './piper';

let err = (method) => () => {
  throw new Error(`Proxy to ${method} is not supported yet. Make a PR!`);
}

const DISALLOWED = [
  'setPrototypeOf',
  'isExtensible',
  'preventExtensions',
  'defineProperty',
  'deleteProperty'
];

const DIRECT = new Set(Object.getOwnPropertyNames(piper({})));

export default function proxy(obj) {
  if (typeof Proxy !== "undefined") {
    let handler = {

      get(target, prop) {
        if (DIRECT.has(prop)) {
          return target[prop];
        }
        return target.valueOf()[prop]
      },

      set(target, prop, value) {
        return target.valueOf()[prop] = value;
      },

      has(target, prop) {
        return prop in target.valueOf();
      },

      enumerate(target) {
        return target.valueOf()[Symbol.iterator]();
      },

      ownKeys(target) {
        return Object.getOwnPropertyNames(target.valueOf());
      },

      // getOwnPropertyDescriptor(target, prop) {
      //   console.log('getting', prop, 'on', target.valueOf());
      //   return Object.getOwnPropertyDescriptor(target.valueOf(), prop);
      // },

      getPrototypeOf(target) {
        return Object.getPrototypeOf(target.valueOf());
      },

      apply(target, context, args) {
        return target.valueOf().apply(context, args);
      },

      construct(target, args) {
        return new target.valueOf()(args);
      }
    }

    DISALLOWED.forEach(method => handler[method] = err(method));

    return new Proxy(obj, handler);
  
  } else {
    return obj;
  }

}
