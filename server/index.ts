import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const typeDefs = gql`
    type Query {
      hello: String!
    }
  `

  const resolvers = {
    Query: {
      hello: () => 'hello world',
    },
  }

  const apolloServer = new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
  })

  await apolloServer.start()

  apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}
