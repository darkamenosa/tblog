// @flow
import type { model as Model } from 'mongoose'


type OptionType = {
  offset?: number,
  limit?: number,
  populate?: Array<Object>,
};

class CrudService {
  model: Object

  constructor(model: Model) {
    this.model = model
  }

  findAll(
    query: Object = {},
    option: ?OptionType) {
    const { limit = 20, offset = 0, populate = [] } = option || {}
    return this.model
      .find(query)
      .limit(Number(limit))
      .skip(Number(offset))
      .populate(populate)
  }

  findOne(query: Object, option: ?OptionType) {
    const { populate = [] } = option || {}
    return this.model
      .findOne(query)
      .populate(populate)
  }

  delete(id: String) {
    return this.model.findOne({ _id: id }).remove()
  }

  save(data: Object) {
    return this.model.create(data)
  }
}

export default CrudService
