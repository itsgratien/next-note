import passport from 'passport'
import passportGoogle from 'passport-google-oauth-token'
import { environment } from 'src/environment'
import UserModel from 'src/server/database/model/user'

const GoogleStrategy = passportGoogle

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
            profilePicture: profile._json.profile,
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
