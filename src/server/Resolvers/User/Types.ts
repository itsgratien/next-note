import { UserType } from 'src/server/Database'
export interface LoginArgs {
  googleToken: string
}

export interface Context {
  req: any
  res: any
  user?: UserType
}
