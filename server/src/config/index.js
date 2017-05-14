// @flow

export default {
  production: process.env.NODE_ENV === 'production',
  server: {
    port: process.env.PORT || 3000,
  },
}
