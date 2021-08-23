import { ApolloError } from 'apollo-server-micro'
import NoteAPI from '../../Datasource/Note'
import { Context } from '../User/types'
import * as NoteType from './Type'

export default {
  addNote: async (_: any, args: NoteType.AddNoteType, context: Context) => {
    try {
      const add = await NoteAPI.addNote(args)

      return {
        message: 'Note added',
        data: add,
      }
    } catch (error) {
      throw new ApolloError('Unable to add note due to internal server error')
    }
  },
}
