import { expect } from 'chai';
import {
  getCityByCountry
} from '../../src/services/retrieve_city.js';
import knex from '../../src/database'

describe('destinations services', () => {
  describe('retrieve city based on country', () => {
    it('returns the expected list of city', async() => {
      const dest = await getCityByCountry('Italy');
	  expect(dest[0].city).to.be.equal('Rome');
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

    it('returns the expected list of city with added destination', async() => {
      const dest = await getCityByCountry('USA');
	  expect(dest[1].city).to.be.equal('San Clemente');
    });

    it('returns the expected list of city with added destination', async() => {
      const dest = await getCityByCountry('USSR');
	  expect(dest[1]).to.be.undefined;
    });

  });

});

