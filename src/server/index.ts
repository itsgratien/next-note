import { ApolloServer } from 'apollo-server-micro'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { NextApiRequest, NextApiResponse } from 'next'
import typeDefs from './schema'
import resolvers from './resolvers'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServer = new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
  })

  await apolloServer.start()

  apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}
