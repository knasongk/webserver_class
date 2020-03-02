import { expect } from 'chai';

import {
  getCityByCountry
} from '../../src/services/retrieve_city.js';

import {
  updateCity 
} from '../../src/services/update_city.js';


import knex from '../../src/database'

describe('destinations services', () => {
  describe('retrieve city based on country', () => {
    it('returns the expected list of city (happy path)', async() => {
      const dest = await getCityByCountry('Italy');
	  expect(dest[0].city).to.be.equal('Rome');
    });
    it('returns the undefined city (unhappy path)', async() => {
      const dest = await getCityByCountry('Mexico');
	  expect(dest[0]).to.be.undefined;
    });
  });

  const fakeDestination = { id: 100, city:'San Clemente', country:'USA',
	  language:'English'};
  describe('delete city', () => {
    let destId;
    beforeEach(async () => {
      const ids = await knex('destinations').insert(fakeDestination).returning('id');
      destId = ids[0];
    });

    afterEach(async () => {
       await knex('destinations').del().where ({id: destId});
    });

    it('returns the expected list of city with added fake Destination (happy path)', async() => {
      const dest = await getCityByCountry('USA');
	  expect(dest[1].city).to.be.equal('San Clemente');
    });

    it('returns the undefined city with added fake Destination (unhappy path)', async() => {
      const dest = await getCityByCountry('USSR');
	  expect(dest[1]).to.be.undefined;
    });

    it('update the city to "Irvine" (happy path)', async() => {
	    await updateCity({ city: 'Irvine', id: destId});
	    const [destCity] = await knex('destinations')
	       .where({ id: destId});
	    expect(destCity.city).to.equal('Irvine');
    });

    it('throws an error when insert non-unique city (unhappy path)', async() => {
	    let retStatus = true;
	    retStatus = await updateCity({ city: 'Paris', id: destId});
	    expect(retStatus).to.be.false;
    });


  });

});

