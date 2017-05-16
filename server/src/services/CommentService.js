// @flow

import CommentModel from '../models/CommentModel'
import CrudService from './CrudService'

class CommentService extends CrudService {
  constructor() {
    super(CommentModel)
  }
}

export default CommentService
