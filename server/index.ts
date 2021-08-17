import next from 'next'
import express from 'express'
import apolloServerSetup from './apollo'

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

const handler = app.getRequestHandler()

app
  .prepare()
  .then(async () => {
    const server = express()

    await apolloServerSetup(server, handler)
  })
  .catch((e) => {
    console.error(e)
  })
