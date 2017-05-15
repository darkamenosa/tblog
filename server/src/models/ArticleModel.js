// @flow

import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
  title: String,
})

export default mongoose.model('Article', ArticleSchema)
