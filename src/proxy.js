import piper from './piper';

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

      setPrototypeOf(target, proto) {
        return Object.setPrototypeOf(target.valueOf(), proto);
      },

      isExtensible(target) {
        return Object.isExtensible(target.valueOf());
      },

      preventExtensions(target) {
        return Object.preventExtensions(target.valueOf());
      },

      defineProperty(target, prop, descriptor) {
        return Object.defineProperty(target.valueOf(), prop, descriptor);
      },

      deleteProperty(target, prop) {
        delete target.valueOf()[prop];
      },

      apply(target, context, args) {
        return target.valueOf().apply(context, args);
      },

      construct(target, args) {
        return new target.valueOf()(args);
      }
    }

    return new Proxy(obj, handler);
  
  } else {
    return obj;
  }

}
