// @flow

import mongoose from 'mongoose'
import bluebird from 'bluebird'

mongoose.Promise = bluebird

const ArticleSchema = new mongoose.Schema({
  title: String,
})

export default mongoose.model('Article', ArticleSchema)
