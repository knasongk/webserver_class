import { buildSchema } from 'graphql'

export default buildSchema(`
   scalar Date

   type Destination {
      city: String
   }

   type VacationSpots {
      city: String!
      country: String!
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

   input AddCityInput {
      city: String!
      country: String!
      language: String!
   }

   input DeleteCityInput {
      city: String!
   }

   input PasswordResetInput {
      username: String!
      password: String!
      key: String!
   }

   type Query {
      cityByCountry(country: String!): [Destination] 
      cityByPreference(preference: String!): [Destination]
      currentUser: User
      availCity: [Destination]
   }

   type Mutation {
       deleteCity(deleteCityInput: DeleteCityInput!): SuccessResponse
       updateTheme(id: ID!, description: String): SuccessResponse
       addCity(addCityInput: AddCityInput!): Destination 
       signup(user: UserInput!): User
       login(loginInput: LoginInput!): User
       logout: SuccessResponse
       requestPasswordReset(username: String!): SuccessResponse
       resetPassword(resetInput: PasswordResetInput!): User
   }
   
`);
