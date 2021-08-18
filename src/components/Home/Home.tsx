import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './Home.module.scss'
import { LogoGoogle } from 'react-ionicons'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import { environment } from 'src/environment'

const Home: NextPage = () => {
  const handleOnSuccessGoogleLogin = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if (!res.code) {
      const successResponse = res as GoogleLoginResponse

      console.log('res', successResponse.getAuthResponse())

      console.log('profile', successResponse.getBasicProfile().getEmail)
    }
  }

  const handleOnFailureGoogleLogin = (res: any) => {}

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
        <GoogleLogin
          render={(renderProps) => (
            <button
              type="button"
              className={`flex items-center justify-center font-bold`}
              disabled={renderProps.disabled}
              onClick={renderProps.onClick}
            >
              <LogoGoogle color="white" width="40px" height="40px" />
              <span>Join using google</span>
            </button>
          )}
          clientId={environment.GoogleClientId}
          onSuccess={handleOnSuccessGoogleLogin}
          onFailure={handleOnFailureGoogleLogin}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </>
  )
}

export default Home
