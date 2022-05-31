import mongoose from 'mongoose'
import { environment } from 'src/utils'

export const connectDb = async () => {
  try {
    await mongoose.connect(environment.DatabaseURI, { useNewUrlParser: true })

    return undefined
  } catch (error) {
    throw error
  }
}
