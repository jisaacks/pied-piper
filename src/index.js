export default function pipe(val) {
  return {
    valueOf() {
      return val;
    }
  }
}
