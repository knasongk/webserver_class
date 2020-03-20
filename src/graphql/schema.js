import { buildSchema } from 'graphql'

export default buildSchema(`
   scalar Date

   type Destinations {
      id: ID!
      city: [String]
      country: String
   }

   type Destination {
      city: String
   }

   type User {
      id: ID!
      displayName: String!
      username: String!
   }

   type Preferences {
       id: ID!
       mood: String!
   }

   type CityPreferences {
       city_id: ID!
       preference_id: ID!
   }

   type SuccessResponse {
      wasSuccessful: Boolean!
   }

   input UserInput {
      displayName: String!
      email: String!
      password: String!
      username: String!
   }

   input LoginInput {
      username: String!
      password: String!
   }

   input PasswordResetInput {
      username: String!
      password: String!
      key: String!
   }

   type Query {
      cityByCountry(country: String!): [Destination] 
      currentUser: User
   }

   type Mutation {
       deleteCity(id: ID!): SuccessResponse
       updateTheme(id: ID!, description: String): SuccessResponse
       addCity(id: ID!, city: String!, country: String!, language: String!): Destination 
       signup(user: UserInput!): User
       login(loginInput: LoginInput!): User
       logout: SuccessResponse
       requestPasswordReset(username: String!): SuccessResponse
       resetPassword(resetInput: PasswordResetInput!): User
   }
   
`);
