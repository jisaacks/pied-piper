![](./pied.jpg)

Simple function composition that doesn't require a kicker in ~25 lines of code.

### Install

```shell
npm install pied --save
```

### Usage

``` javascript
import pipe from 'pied';

let double = x => x + x;
let square = x => x * x;

let val = pipe(5).to(double).to(square);

console.log( Number(val) ); // 100
```
