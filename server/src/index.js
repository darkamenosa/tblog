// @flow
import express from 'express'
import compression from 'compression'
import path from 'path'

import config from './config'

const app = express()
app.use(compression())

app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(config.server.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port: ${config.server.port}`)
})
