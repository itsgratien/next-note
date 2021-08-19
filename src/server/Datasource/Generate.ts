import jwt from 'jsonwebtoken'
import { environment } from 'src/utils'

interface Payload {
  [key: string]: string
}
export default {
  generateBearerToken: (payload: Payload) => {
    const token = jwt.sign(payload, environment.SecretKey, { expiresIn: '1d' })

    return `Bearer ${token}`
  },
}
