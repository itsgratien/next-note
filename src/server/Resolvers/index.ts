import { UserMutation, UserQuery } from './User'
import { NoteMutation, NoteQuery } from './Note'

export default {
  Query: {
    hello: () => 'hello world',
    ...UserQuery,
    ...NoteQuery,
  },
  Mutation: {
    ...NoteMutation,
    ...UserMutation,
  },
}
