// @flow

import { Router } from 'express'

const router = Router()

router.use('/', (req, res) => {
  res.json({
    article: 'This is an article',
  })
})

router.use('/1', (req, res) => {
  res.json({
    article: 'This is an article',
  })
})

export default router
