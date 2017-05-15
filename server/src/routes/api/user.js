// @flow
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    user: 'This is an user',
  })
})

export default router
