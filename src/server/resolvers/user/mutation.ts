import { ApolloError } from 'apollo-server-micro'
import dataSource from 'src/server/datasource'
import { LoginArgs, Context } from './types'

export default {
  login: async (_: any, args: LoginArgs, context: Context) => {
    try {
      const { req, res } = context

      const { googleToken } = args

      req.body = {
        ...req.body,
        access_token: googleToken,
      }

      const d = await dataSource.passport(req, res)

      console.log('data', d)
      return {
        token: 'token',
      }
    } catch (error) {
      throw new ApolloError('Unable to login due to internal server error')
    }
  },
}
