import mongoose, { Document, Model } from 'mongoose'
import { UserType } from './user'
export interface NoteType extends Document {
  title: string
  description: string
  owner: string | UserType
  createdAt: string
  updatedAt: string
}

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
)

const model = (
  mongoose.models.Note ? mongoose.models.Note : mongoose.model('Note', schema)
) as Model<NoteType>

export default model
