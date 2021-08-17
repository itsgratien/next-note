import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const port = process.env.PORT || 4000

const setupApolloServer = async (server: express.Application, handler: any) => {
  const typeDefs = gql`
    type Query{
        hello: {
            name: String!
        }
    }
    `

  const resolvers = {
    Query: {
      hello: () => ({ name: 'hello' }),
    },
  }

  const apolloServer = new ApolloServer({ typeDefs, resolvers })

  apolloServer.applyMiddleware({ app: server })

  await new Promise((resolver: any) => server.listen({ port }, resolver))

  server.get('*', (req, res) => {
    return handler(req, res)
  })
}
export default setupApolloServer
