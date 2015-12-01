import {expect as chaiExpect} from 'chai';
import pipe from '../src';

let expect = val => chaiExpect(val.valueOf());

describe('pipeable', () => {

  it('evaluates to it\'s value', () => {

    expect(pipe(5)).to.equal(5);

  });

});
