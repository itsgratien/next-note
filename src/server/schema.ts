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
    username: String!
    profilePicture: String
  }

  type Note {
    _id: ID!
    title: String!
    description: String
    owner: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type Mutation {
    addNote(title: String!, description: String!): Note!
  }
`
