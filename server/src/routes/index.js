// @flow

import { Router } from 'express'
import api from './api'

const router = Router()

router.use('/api', api)
router.use('/hello', (req, res) => {
  res.json({
    msg: 'Hello',
  })
})

export default router
