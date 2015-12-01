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

});
