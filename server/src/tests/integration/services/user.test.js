import bluebird from 'bluebird'
import mongoose from 'mongoose'
import { Mockgoose } from 'mockgoose'
import UserModel from '../../../models/UserModel'
import UserService from '../../../services/UserService'

let db
const mockgoose = new Mockgoose(mongoose, { port: 654398 })

beforeAll(async () => {
  await mockgoose.prepareStorage()
  db = mongoose.connect('mongodb://test/tblog', { safe: true, promiseLibrary: bluebird })
}, 120000)

afterAll(async (done) => {
  await mockgoose.helper.reset()
  db.disconnect(done)
})

const userService = new UserService(UserModel)

describe('UserService CRUD test', () => {
  // Stored id to do findOne test
  let id

  test('should save user', async () => {
    const response = await userService.save({
      username: 'darkamenosa',
      email: 'hxtxmu@gmail.com',
      bio: 'Handsome and funny',
      image: 'xxxx',
    })

    expect(response._id).not.toBeNull() // eslint-disable-line
    id = response._id // eslint-disable-line

    expect(response.username).toBe('darkamenosa')
    expect(response.email).toBe('hxtxmu@gmail.com')
  })

  test('should return array', async () => {
    const response = await userService.findAll()
    expect(response.length).toBeGreaterThan(0)
  })

  test('should return one value', async () => {
    const response = await userService.findOne(id)
    expect(response).not.toBeNull()
    expect(response._id).toEqual(id) // eslint-disable-line
  })

  test('should delete value', async () => {
    await userService.delete(id)
    const users = await userService.findAll()
    expect(users.length).toBe(0)
  })
})
