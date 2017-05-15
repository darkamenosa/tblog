// @flow

import { Router } from 'express'
import article from './article'
import user from './user'

const router = Router()

router.use('/articles', article)
router.use('/users', user)

router.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce((errors, key) => {
        // eslint-disable-next-line
        errors[key] = err.errors[key].message

        return errors
      }, {}),
    })
  }

  return next(err)
})


export default router
