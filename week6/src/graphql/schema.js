import { buildSchema } from 'graphql'

export default buildSchema(`
   scalar Date

   type Destinations {
      id: ID!
      city: [String]
      country: String
   }

   type Destination {
      city: [String]
      country: String
   }


   type Users {
      id: ID!
      display_name: String!
      username: String!
      destinationId: ID!
      email: String!
   }

   type Preferences {
       id: ID!
       mood: String!
   }

   type CityPreferences {
       city_id: ID!
       preference_id: ID!
   }

   type Query {
      getCity(country: String!): [Destination]
   }
   
`);
