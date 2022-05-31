import passport from 'passport'
import passportGoogle from 'passport-google-oauth-token'
import passportJWT from 'passport-jwt'
import { environment } from 'src/utils'
import { UserModel, UserType } from 'src/server/Database'

const GoogleStrategy = passportGoogle

const jwtStrategy = passportJWT.Strategy

const jwtExtract = passportJWT.ExtractJwt

passport.use(
  new GoogleStrategy(
    {
      clientID: environment.GoogleClientId,
      clientSecret: environment.GoogleClientSecret,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const find = await UserModel.findOne({ email: profile._json.email })

        if (!find) {
          const create = await UserModel.create({
            email: profile._json.email,
            profilePicture: profile._json.picture,
          })

          done(null, create)
        }
        done(null, find)
      } catch (error) {
        done(error, null)
      }
    }
  )
)

passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: jwtExtract.fromAuthHeaderAsBearerToken(),
      secretOrKey: environment.SecretKey,
    },
    async (payload, done) => {
      try {
        const findUser = await UserModel.findById(payload._id)

        if (!findUser) {
          done('User not found', null)
        }

        done(null, findUser)
      } catch (error) {
        done(error, null)
      }
    }
  )
)

export default (req: any, res: any) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('google-oauth-token', (error, data) => {
      if (error) {
        reject(error)
      }

      if (data) {
        resolve(data)
      }
    })(req, res)
  })
}

export const authWithPassportJwt = (req: any, res: any): Promise<UserType> => {
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', (error, data: UserType) => {
      if (error) {
        reject(error)
      }

      if (data) {
        resolve(data)
      } else {
        reject('Unauthorized access')
      }
    })(req, res)
  })
}
