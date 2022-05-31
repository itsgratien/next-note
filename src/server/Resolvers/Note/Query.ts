import { ApolloError, UserInputError } from 'apollo-server-micro'
import { Context } from '../User/Types'
import UserApi from 'src/server/Datasource/User'
import NoteApi from 'src/server/Datasource/Note'
import * as NoteTypes from './Types'

export default {
  getNotes: UserApi.isAuth(async (_root: any, _args: any, context: Context) => {
    try {
      const find = await NoteApi.getNotes()

      return find
    } catch (error) {
      throw new ApolloError(
        'Unable to fetch notes due to internal server error'
      )
    }
  }),
  getSingleNote: UserApi.isAuth(
    async (_root: any, args: NoteTypes.GetSingleNoteArgs, context: Context) => {
      try {
        const find = await NoteApi.getSpecificNote(args.noteId)

        if (!find) {
          throw new UserInputError('Note not found')
        }

        return find
      } catch (error) {
        throw new ApolloError(
          'Unable to fetch note due to internal server error'
        )
      }
    }
  ),
}
