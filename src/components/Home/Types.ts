import { gql } from '@apollo/client'

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    _id
    email
    createdAt
    updatedAt
  }
`
export const LOGIN = gql`
  mutation Login($googleToken: String!) {
    login(googleToken: $googleToken) {
      token
      user {
        ...UserFragment
      }
    }
  }
  ${USER_FRAGMENT}
`

export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`

export interface UserType {
  _id: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface LoginResponse {
  login: {
    token: string
    user: UserType
  }
}

export interface LoginVariable {
  googleToken: string
}

export interface IsLoggedInResponse {
  isLoggedIn: boolean
}
