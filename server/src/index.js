// @flow
import 'babel-polyfill'
import express from 'express'
import compression from 'compression'
import path from 'path'

import bodyParser from 'body-parser'
// import session from 'express-session'
import errorhandler from 'errorhandler'
import cors from 'cors'

import logger from 'morgan'
import methodOverride from 'method-override'
import mongoose from 'mongoose'
import BPromise from 'bluebird'

import routes from './routes'
import config from './config'

const startServer = (cfg: Object) => {
  const app = express()

  // Configure express middleware
  app.use(cors())
  app.use(logger('dev'))
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(methodOverride())
  app.use(compression())
  app.use(express.static(path.resolve(__dirname, 'public')))
  // app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 },
  // resave: false, saveUninitialized: false }))

  app.use(routes)

  if (cfg.production) {
    app.use(errorhandler())
  }

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err : Object = new Error('Not Found')
    err.status = 404
    next(err)
  })

  // error handlers

  // development error handler
  // will print stacktrace
  if (!cfg.production) {
    app.use((err, req, res) => {
      // eslint-disable-next-line no-console
      console.log(err.stack)

      res.status(err.status || 500)

      res.json({
        errors: {
          message: err.message,
          error: err,
        },
      })
    })
  }

  // production error handler
  // no stacktraces leaked to user
  app.use((err, req, res) => {
    res.status(err.status || 500)
    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    })
  })


  return new BPromise((resolve) => {
    const server = app.listen(cfg.server.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is listening on port: ${cfg.server.port}`)
      resolve(server)
    })
  })
}

if (require.main === module) {
  const options = { promiseLibrary: BPromise, safe: true }
  mongoose.connect(config.db.url, options)
  startServer(config)
}

export default startServer
