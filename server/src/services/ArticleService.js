// @flow

import ArticleModel from '../models/ArticleModel'
import CrudService from './CrudService'

class ArticleService extends CrudService {
  constructor() {
    super(ArticleModel)
  }
}

export default ArticleService
