import { ApolloError } from 'apollo-server-micro'
import dataSource from 'src/server/Datasource'
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

      const response: any = await dataSource.passport(req, res)

      return {
        token: dataSource.generate.generateBearerToken({ _id: response._id }),
        user: response,
      }
    } catch (error) {
      throw new ApolloError('Unable to login due to internal server error')
    }
  },
}
