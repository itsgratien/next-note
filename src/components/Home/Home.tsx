import * as React from 'react'
import styles from './Home.module.scss'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import { LogoGoogle } from 'react-ionicons'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import { environment } from 'src/utils'
import { useMutation, useQuery } from '@apollo/client'
import * as HomeType from './Types'
import { LOGIN, IS_LOGGED_IN } from './Types'
import { ButtonSpinner } from 'src/components'
import classnames from 'classnames'

export const Home: NextPage<any> = (props) => {
  const isLoggedInResponse = useQuery<HomeType.IsLoggedInResponse>(IS_LOGGED_IN)

  const [login, { loading, data }] = useMutation<
    HomeType.LoginResponse,
    HomeType.LoginVariable
  >(LOGIN, {
    onCompleted: (value) => {
      if (value.login && value.login.token) {
        Cookie.set(environment.NoteToken, value.login.token)
      }
    },
  })

  const route = useRouter()

  const handleOnSuccessGoogleLogin = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if (!res.code) {
      const successResponse = res as GoogleLoginResponse

      login({
        variables: {
          googleToken: successResponse.getAuthResponse().access_token,
        },
      })
    }

    return undefined
  }

  const handleOnFailureGoogleLogin = (res: any) => {}

  if (data || isLoggedInResponse.data?.isLoggedIn) {
    route.push('/my-notes')
  }

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
              className={classnames(
                'flex items-center justify-center',
                renderProps.disabled || loading
                  ? styles.loginButtonLoading
                  : styles.loginButton
              )}
              disabled={renderProps.disabled || loading}
              onClick={renderProps.onClick}
            >
              <ButtonSpinner loading={renderProps.disabled || loading}>
                <LogoGoogle color="white" width="40px" height="40px" />
                <span>Join using google</span>
              </ButtonSpinner>
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
