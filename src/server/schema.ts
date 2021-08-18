import { gql } from 'apollo-server-micro'

export default gql`
  scalar Date
  type Query {
    hello: String!
    me: User!
    getNotes: [Note!]!
    getSingleNote: Note!
  }
  type User {
    _id: ID!
    email: String!
    profilePicture: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Note {
    _id: ID!
    title: String!
    description: String
    owner: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type LoginResponse {
    token: String!
    user: User
  }

  type Mutation {
    addNote(title: String!, description: String!): Note!
    login(googleToken: String!): LoginResponse
  }
`
