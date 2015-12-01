export default function pipe(val) {
  
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
      return chain.reduce( (a, b) => b(a) );
    },
    
    to(func) {
      chain.push(func);
      return this;
    }
  }
}
