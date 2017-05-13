// @flow
import express from 'express'
import compression from 'compression'

import config from './config'

const app = express()
app.use(compression())

app.get('/', (req, res) => {
  res.json({
    msg: 'Hello',
  })
})

app.listen(config.server.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port: ${config.server.port}`)
})
