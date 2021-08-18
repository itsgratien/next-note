import mongoose, { Document } from 'mongoose'
import { UserType } from './user'
export interface NoteType extends Document {
  title: string
  description: string
  owner: string | UserType
  createdAt: string
  updatedAt: string
}

export default mongoose.model<NoteType>(
  'Note',
  new mongoose.Schema(
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
)
