export default function pipe(val) {
  
  let chain = [val];
  
  return {
    
    valueOf() {
      return chain.reduce( (a, b) => b(a) );
    },
    
    to(func) {
      chain.push(func);
      return this;
    }
  }
}
