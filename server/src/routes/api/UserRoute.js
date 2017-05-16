// @flow
import { Router } from 'express'
import UserService from '../../services/UserService'
import { userResponse } from './utils'

const userService = new UserService()
const router = Router()

// Handle params

router.param('username', async (req, res, next, username) => {
  const user = await userService.findOne({ username })
  if (!user) {
    return res.sendStatus(404)
  }
  req.user = user
  return next()
})

// Handle request
router.get('/', async (req, res) => {
  const users = await userService.findAll()
  res.json(users.map(userResponse))
})

router.post('/', async (req, res) => {
  const user = req.body.user
  const result = await userService.save(user)
  res.json(result)
})

export default router
