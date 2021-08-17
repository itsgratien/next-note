import React from 'react'
import type { NextPage } from 'next'
import { Layout } from 'components'
import styles from 'styles/Home.module.scss'
import { LogoGoogle } from 'react-ionicons'

const Home: NextPage = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default Home
