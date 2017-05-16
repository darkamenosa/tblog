// @flow

import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
}, { timestamps: true })

export default mongoose.model('Comment', CommentSchema)
