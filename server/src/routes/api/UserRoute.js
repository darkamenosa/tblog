// @flow
import { Router } from 'express'
import { userResponse, errorChecking, notAllowed } from './utils'
import UserModel from '../../models/UserModel'

const usersAPI = ({ model }) => ({

  // GET: /
  index: async (req, res) => {
    const { offset = 0, limit = 10, orderBy = 'createdAt', orderDirection = 'asc' } = req.query

    // Build query here
    const query = {}

    // Run query
    const data = await model.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({ [orderBy]: orderDirection })
        .exec()

    const count = await model.count(query).exec()

    res.json({
      offset,
      limit,
      orderBy,
      orderDirection,
      count: count.count,
      data: data.map(userResponse),
    })
  },
})

const api = usersAPI({ model: UserModel })
const router = Router()

router.route('/')
  .get(errorChecking(api.index))
  .all(notAllowed)

export default router
