// @flow
import mongoose from 'mongoose'
import bluebird from 'bluebird'

mongoose.Promise = bluebird

const UserSchema = new mongoose.Schema({
  username: { type: String, lowercase: true, unique: true, required: true },
  email: { type: String, lowercase: true, unique: true, required: true },
  bio: String,
  image: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  hash: String,
  salt: String,
}, { timestamps: true })

export default mongoose.model('User', UserSchema)
