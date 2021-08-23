import { gql } from 'apollo-server-micro'

export default gql`
  scalar Date

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
    user: User
    createdAt: Date!
    updatedAt: Date!
  }

  type LoginResponse {
    token: String!
    user: User
  }

  type AddNoteResponse {
    message: String!
    data: Note!
  }

  type Query {
    hello: String!
    me: User!
    getNotes: [Note!]!
    getSingleNote(noteId: String!): Note!
  }

  type Mutation {
    addNote(title: String!, description: String!): AddNoteResponse!
    login(googleToken: String!): LoginResponse
  }
`
