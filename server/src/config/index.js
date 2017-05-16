// @flow

export default {
  production: process.env.NODE_ENV === 'production',
  db: {
    url: process.env.MONGODB_URI || 'mongodb://localhost/tblog',
  },
  server: {
    port: process.env.PORT || 3000,
  },
}
