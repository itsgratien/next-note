import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client'
import { environment } from './Environment'
import Cookie from 'js-cookie'

export const IsLoggedInVar = makeVar<boolean>(
  !!Cookie.get(environment.NoteToken)
)

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read: () => IsLoggedInVar(),
        },
      },
    },
  },
})

export const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache,
  headers: {
    Authorization: Cookie.get(environment.NoteToken) || '',
  },
})
