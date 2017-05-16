// @flow

import { Router } from 'express'

import ArticleRoute from './api/ArticleRoute'
import UserRoute from './api/UserRoute'

const router = Router()

router.use('/api/articles', ArticleRoute)
router.use('/api/users', UserRoute)

export default router
