import { expect } from 'chai';
import getTourById from '../src/tours.js';

describe('MyModule', () => {
   describe('myFunc (getTourById) happy path for input value 1', () => {
       it('check cost for tour#1 when given 1', () => {
	       const tour = getTourById(1);
	       expect(tour.cost).to.equal("$100") });
       it('check description for tour#1 when given 1', () => {
	       const tour = getTourById(1);
	       expect(tour.description).to.equal("boat ride along the main river") });
       it('check id for tour#1 when given 1', () => {
	       const tour = getTourById(1);
	       expect(tour.id).to.equal(1) });
   });

   describe('myFunc (getTourById) happy path for input value 2', () => {
       it('check cost for tour#2 when given 2', () => {
	       const tour = getTourById(2);
	       expect(tour.cost).to.equal("$250") });
       it('check description info for tour#2 when given 2', () => {
	       const tour = getTourById(2);
	       expect(tour.description).to.equal("temple excursion in Songkhla province") });
       it('check id for tour#1 when given 2', () => {
	       const tour = getTourById(2);
	       expect(tour.id).to.equal(2) });
   });

   describe('myFunc (getTourById) happy path for input value 2', () => {
       it('check object for tour#2 when given 2', () => {
	       const tour = getTourById(2);
	       expect(tour).to.eql({id:2, description:"temple excursion in Songkhla province", cost:"$250"})});
   });


   describe('myFunc (getTourById) unhappy path for input value 3', () => {
       it('check for undefined tour when given 3', () => {
	       const tour = getTourById(3);
	       expect(tour).to.equal(undefined) });
   });
});
