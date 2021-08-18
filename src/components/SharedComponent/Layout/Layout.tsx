import React, { FC, useState } from 'react'
import Head from 'next/head'
import { Header, Footer, AddNote } from 'src/components'

const Layout: FC = (props) => {
  const [openAddNote, setOpenAddNote] = useState<boolean>(false)

  const { children } = props

  return (
    <>
      <Head>
        <title>Next Note</title>
        <meta name="description" content="Group your information in note" />
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <Header />
      {openAddNote && <AddNote />}
      <main>{children}</main>
      <Footer handleAddNote={setOpenAddNote} openAddNote={openAddNote} />
    </>
  )
}
export default Layout
