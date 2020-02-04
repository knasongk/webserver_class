import { expect } from 'chai';
import hello, { goodbye, myMult } from '../src/myfunc.js';

describe('MyModule', () => {
   describe('myFunc (multiply) happy path', () => {
       it('return 6 when given 2 and 3', () => {
	   expect(myMult(2,3)).to.equal(6);
       });
   });
   describe('myFunc (multiply) uphappy path', () => {
       it('return NaN when given 4 and foo', () => {
	   expect(myMult(4,'foo')).to.be.NaN;
       });
   });
});
