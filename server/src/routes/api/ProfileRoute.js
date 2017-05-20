// @flow

import { Router } from 'express'
import { userResponse, errorChecking, notAllowed } from './utils'
import UserModel from '../../models/UserModel'

const profilesAPI = ({ model }) => ({

  // GET: /:username
  index: async (req, res) => {
    const instance = await model.findOne({ username: req.params.username })
    if (instance) {
      res.json({ data: userResponse(instance) })
    } else {
      res.status(404).json({ error: 'Not found' })
    }
  },
})

const api = profilesAPI({ model: UserModel })
const router = Router()

router.route('/:username')
  .get(errorChecking(api.index))
  .all(notAllowed)

export default router
