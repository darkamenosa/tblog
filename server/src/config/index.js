// @flow

export default {
  production: process.env.NODE_ENV === 'production',
  db: {
    url: process.env.MONGOHQ_URL || 'mongodb://localhost/tblog',
  },
  server: {
    port: process.env.PORT || 3000,
  },
}
