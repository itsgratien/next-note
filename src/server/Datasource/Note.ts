import { NoteModel } from '../Database'
import { AddNoteType } from '../Resolvers'

export default {
  getNotes: async () => {
    const find = await NoteModel.find({})

    return find
  },

  getSpecificNote: async (noteId: string) => {
    const find = await NoteModel.findById(noteId)

    return find
  },

  addNote: async (value: AddNoteType) => {
    const add = await NoteModel.create(value)

    return add
  },

  deleteNote: async (noteId: string) => {
    const del = await NoteModel.findByIdAndRemove(
      { _id: noteId },
      { rawResult: true }
    )

    return del
  },
}
