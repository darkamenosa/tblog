// @flow

import { Router } from 'express'
import Promise from 'bluebird'
import { articleResponse, errorChecking, checkReservedParams, notAllowed } from './utils'
import ArticleModel from '../../models/ArticleModel'

const articlesAPI = ({ model }) => ({

  // GET: /
  index: async (req, res) => {
    const { offset = 0, limit = 10, orderBy = 'createdAt', orderDirection = 'asc' } = req.query

    // Build query here
    const query = {}

    // Run query parallel
    const [data, count] = await Promise.all([
      // Generate find articles query
      model.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({ [orderBy]: orderDirection })
        .populate('author')
        .exec(),
      // Generate count query
      model.count(query).exec(),
    ])

    res.json({
      offset,
      limit,
      orderBy,
      orderDirection,
      count: count.count,
      data: data.map(articleResponse),
    })
  },

  // POST: /
  create: async (req, res) => {
    const instance = await model.create(req.body)
    res.status(201).json({ data: instance })
  },

  // PUT: /
  update: async () => {

  },

  // GET: /:id
  get: async () => {

  },

  // PUT: /:id
  del: async () => {

  },
})

const router = Router()
const api = articlesAPI({ model: ArticleModel })

router.route('/')
  .get(errorChecking(api.index))
  .post(errorChecking(checkReservedParams(api.create, 'id', 'createdAt', 'updatedAt')))
  .all(errorChecking(notAllowed))


export default router
