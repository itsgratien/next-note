import React, { FC, useState } from 'react'
import Head from 'next/head'
import { Header, Footer, AddNote } from 'src/components'

interface Props {
  header?: boolean
  footer?: boolean
}

const Layout: FC<Props> = (props) => {
  const [openAddNote, setOpenAddNote] = useState<boolean>(false)

  const { children, header, footer } = props

  return (
    <>
      <style jsx>{`
        main {
          padding-top: 100px;
        }
      `}</style>
      <Head>
        <title>Next Note | Dashboard</title>
        <meta name="description" content="Group your information in note" />
        <link rel="icon" href="/vercel.svg" />
      </Head>
      {header && <Header />}
      {openAddNote && <AddNote />}
      <main>{children}</main>
      {footer && (
        <Footer handleAddNote={setOpenAddNote} openAddNote={openAddNote} />
      )}
    </>
  )
}
export default Layout
