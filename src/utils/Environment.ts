export const environment = {
  GoogleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  GoogleClientId:
    process.env.GOOGLE_CLIENT_ID ||
    '879426867875-eu1a1lt56e3jkqnic4so92edevqkj0nj.apps.googleusercontent.com',
  DatabaseURI: process.env.DATABASE_URI || '',
  SecretKey: process.env.SECRET_KEY || '',
}
