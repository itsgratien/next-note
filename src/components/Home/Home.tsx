import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './Home.module.scss'
import { LogoGoogle } from 'react-ionicons'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Note | Join</title>
        <meta name="description" content="Group your information in note" />
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <div
        className={`${styles.home} w-full h-screen relative flex items-center justify-center`}
      >
        <button
          type="button"
          className={`flex items-center justify-center font-bold`}
        >
          <LogoGoogle color="white" width="40px" height="40px" />
          <span>Join using google</span>
        </button>
      </div>
    </>
  )
}

export default Home
