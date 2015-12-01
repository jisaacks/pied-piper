import {expect as chaiExpect} from 'chai';
import pipe from '../src';

let expect = val => chaiExpect(val.valueOf());

let increm = x => x + 1;
let double = x => x + x;
let square = x => x * x;

describe('pipeable', () => {

  it('evaluates to it\'s value', () => {
    expect( pipe(5) ).to.equal(5);
  });

  it('pipes to functions', () => {
    expect( pipe(5).to(double) ).to.equal(10);
  });

  it('is chainable', () => {
    expect( pipe(5).to(double).to(square) ).to.equal(100);
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

    chaiExpect(Number(n)).to.equal(10);
    chaiExpect(String(s)).to.equal('ss');
  });

});
