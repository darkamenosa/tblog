// @flow
import { Router } from 'express'
import UserService from '../../services/UserService'

const userService = new UserService()
const router = Router()


function randomString() {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 5; i++) { // eslint-disable-line no-plusplus
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}

router.get('/', async (req, res) => {
  const users = await userService.findAll()
  res.json(users)
})

router.post('/', async (req, res) => {
  const user = await userService.save({
    username: randomString(),
    email: randomString(),
    bio: 'Handsome and funny',
    image: 'xxxx',
  })

  res.json(user)
})

export default router
