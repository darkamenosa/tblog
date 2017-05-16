// @flow

import { Router } from 'express'
import ArticleService from '../../services/ArticleService'
import { articleResponse } from './utils'

const articleService = new ArticleService()
const router = Router()


router.use('/', async (req, res) => {
  const { limit = 20, offset = 0 } = req.query

  const articles = await articleService.findAll({}, { limit, offset })

  res.json(articles.map(articleResponse))
})

export default router
