import { ApolloServer } from 'apollo-server-micro'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { NextApiRequest, NextApiResponse } from 'next'
import typeDefs from './schema'
import resolvers from './Resolvers'
import { connectDb } from './Database/connect'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServer = new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    context: ({ req, res }) => {
      return { req, res }
    },
  })

  await apolloServer.start()

  await connectDb()

  apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}
