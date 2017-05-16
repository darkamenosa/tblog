// @flow
import { Router } from 'express'

import ArticleRoute from './ArticleRoute'
import UserRoute from './UserRoute'
import ProfileRoute from './ProfileRoute'

const router = Router()

router.use('/articles', ArticleRoute)
router.use('/users', UserRoute)
router.use('/profiles', ProfileRoute)

export default router
