// @flow

import CrudService from './CrudService'
import UserModel from '../models/UserModel'

class UserService extends CrudService {
  constructor() {
    super(UserModel)
  }
}

export default UserService
