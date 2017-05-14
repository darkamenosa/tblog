import axios from 'axios'
import startServer from '../../index'

const config = {
  production: process.env.NODE_ENV === 'production',
  server: {
    port: process.env.PORT || 3000,
  },
}

const api = axios.create({
  baseURL: `http://localhost:${config.server.port}/api`,
})

let server

beforeAll(async () => {
  server = await startServer(config)
})

afterAll((done) => {
  server.close(done)
})

describe('First integration test', () => {
  test('Should return 404', async () => {
    const response = await api.get('test-test').catch(error => error.response)
    expect(response.status).toBe(404)
  })
})
