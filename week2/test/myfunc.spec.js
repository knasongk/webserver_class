import { expect } from 'chai';
import getTourById from '../src/tours.js';

describe('MyModule', () => {
   describe('myFunc (getTourById) happy path', () => {
       it('return object info for tour#1 when given 1', () => {
	   expect(getTourById(1)).to.equal({ id:1, description:"boat ride along the main river", cost:"$100" });
       });
   });
   describe('myFunc (getTourById) happy path', () => {
       it('return object info for tour#2 when given 2', () => {
	   expect(getTourById(2)).to.equal({ id:2, description:"temple excursion in Songkhla province", cost:"$250" });
       });
   });
});
