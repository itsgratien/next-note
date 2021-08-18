import mongoose, { Document } from 'mongoose'
export interface UserType extends Document {
  email: string
  profilePicture?: string
  createdAt: string
  updatedAt: string
}

const user = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
)

const model = mongoose.model<UserType>('User', user)

export default model
