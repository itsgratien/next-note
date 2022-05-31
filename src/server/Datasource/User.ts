import { AuthenticationError } from 'apollo-server-micro'
import { authWithPassportJwt } from '../Datasource/Passport'
import { Context } from '../Resolvers/User/Types'

export default {
  isAuth: (next: any) => async (root: any, args: any, context: Context) => {
    try {
      const { req, res } = context

      const user = await authWithPassportJwt(req, res)

      context.user = user

      return next(root, args, context)
    } catch (error: any) {
      return new AuthenticationError(error)
    }
  },
}
