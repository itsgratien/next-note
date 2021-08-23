import { ApolloError } from 'apollo-server-micro'
import NoteApi from '../../Datasource/Note'
import { Context } from '../User/Types'
import * as NoteType from './Types'
import UserApi from 'src/server/Datasource/User'

export default {
  addNote: UserApi.isAuth(
    async (_: any, args: NoteType.AddNoteType, context: Context) => {
      try {
        const add = await NoteApi.addNote({
          ...args,
          owner: context.user ? context.user._id : undefined,
        })

        return {
          message: 'Note added',
          data: add,
        }
      } catch (error) {
        throw new ApolloError('Unable to add note due to internal server error')
      }
    }
  ),
}
