import proxy from './proxy';
import piper from './piper';

export default function pipe(val) {
  return proxy(piper(val));
}
