import mongoose, { Document, Model } from 'mongoose'
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

const model = (
  mongoose.models.User ? mongoose.models.User : mongoose.model('User', user)
) as Model<UserType>

export default model
