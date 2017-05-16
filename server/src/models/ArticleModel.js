// @flow

import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const ArticleSchema = new mongoose.Schema({
  slug: { type: String, lowercase: true, unique: true },
  title: String,
  description: String,
  body: String,
  favoritesCount: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tagList: [{ type: String }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })

ArticleSchema.plugin(uniqueValidator, { message: 'is already taken' })

export default mongoose.model('Article', ArticleSchema)
