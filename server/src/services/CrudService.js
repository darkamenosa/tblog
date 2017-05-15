// @flow

class CrudService {
  model: Object

  constructor(model: Object) {
    this.model = model
  }

  findAll() {
    return this.model.find({})
  }

  findOne(id: String) {
    return this.model.findOne({ _id: id })
  }

  delete(id: String) {
    return this.model.findOne({ _id: id }).remove()
  }

  save(data: Object) {
    return this.model.create(data)
  }
}

export default CrudService
