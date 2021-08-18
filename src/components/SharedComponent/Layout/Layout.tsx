import React, { FC } from 'react'
import Head from 'next/head'
import { Header, Footer } from 'src/components'

const Layout: FC = (props) => {
  const { children } = props

  return (
    <>
      <Head>
        <title>Next Note</title>
        <meta name="description" content="Group your information in note" />
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
