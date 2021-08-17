import React from 'react'
import type { NextPage } from 'next'
import { Layout } from 'components'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <span className="text-xl font-bold">Hello gratien</span>
      </div>
    </Layout>
  )
}

export default Home
