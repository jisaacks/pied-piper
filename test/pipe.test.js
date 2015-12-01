import {expect} from 'chai';
import 'harmony-reflect';
import pipe from '../src';

let increm = x => x + 1;
let double = x => x + x;
let square = x => x * x;

describe('pipeable', () => {

  it('evaluates to it\'s value', () => {
    expect( Number(pipe(5)) ).to.equal(5);
  });

  it('pipes to functions', () => {
    expect( Number(pipe(5).to(double)) ).to.equal(10);
  });

  it('is chainable', () => {
    expect( Number(pipe(5).to(double).to(square)) ).to.equal(100);
  });

  it('can be used directly as a value', () => {
    expect( pipe(3).to(increm) * 3 ).to.equal(12);
  });

  it('can be directly incremented', () => {
    let piped = pipe(3).to(increm);
    expect( ++piped ).to.equal(5);
  });

  it('coerces correctly', () => {
    let n = pipe(5).to(x => x + x);
    let s = pipe('s').to(x => `${x}${x}`);

    expect(Number(n)).to.equal(10);
    expect(String(s)).to.equal('ss');
  });

  it('works with non primitives', () => {

    let dubs = x => x.concat(x);

    let piped = pipe([1, 2, 3]).to(dubs);

    expect(piped).to.have.length(6);

    piped.push(4);

    expect(piped).to.have.length(7);
  });

  it('can be accessed at an intermiediate state', () => {
    let dubs = x => x.concat(x);
    let piped = pipe([1, 2]).to(dubs);

    expect(piped).to.have.length(4);
    piped.push(3);
    expect(piped.to(dubs)).to.have.length(10);
  });

});
