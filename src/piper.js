export default function piper(val) {
  let chain = [val];

  return {
    [Symbol.toPrimitive](hint) {
      let val = this.valueOf();

      if (hint === "number") {
        return Number(val);
      }
      if (hint === "string") {
        return String(val);
      }
      return val;
    },

    toString() {
      return String(this.valueOf());
    },
    
    valueOf() {
      let next = chain.reduce( (a, b) => b(a) );
      chain = [next];
      return next;
    },
    
    to(func) {
      chain.push(func);
      return this;
    }
  }
}
