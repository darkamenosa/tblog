// @flow

import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  title: String,
})

export default mongoose.model('Comment', CommentSchema)
