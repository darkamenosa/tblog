// @flow

import mongoose from 'mongoose'
import bluebird from 'bluebird'

mongoose.Promise = bluebird

const CommentSchema = new mongoose.Schema({
  title: String,
})

export default mongoose.model('Comment', CommentSchema)
