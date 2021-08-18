import { UserMutation, UserQuery } from './user'
import { NoteMutation, NoteQuery } from './note'

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
