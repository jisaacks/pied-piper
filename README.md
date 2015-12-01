![](./pied.jpg)

## Awesome function composition!!

Why is it Awesome?

* [Doesn't require a kicker](#no-kicker)
* [Can be treated as a raw value between compositions](#accessing-values-between-compositions)

### Install

```shell
npm install pied --save
```

### Usage

``` javascript
import pipe from 'pied';

// -- Working with primitives

let double = x => x + x;
let square = x => x * x;

let val = pipe(5).to(double).to(square);

console.log( Number(val) ); // 100

// -- Working with non primitives

let dubs = x => x.concat(x);

let piped = pipe([1, 2]).to(dubs);

console.log( piped.length ); // 4
```

### No Kicker

```javascript
pipe(5).to(double) * 2; // 20
```

### Accessing Values Between Compositions

```javascript
let piped = pipe([1, 2]).to(dubs);

// accessing the array directly
piped.push(3);

console.log( piped.length ); // 5

// piping again
piped.to(dubs);

console.log( piped.length ); // 10
```

__Note:__ This feature requires [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy). If you do not have access to Proxy you can use `pipe([1, 2]).to(dubs).valueOf()` to access the inner array directly.
