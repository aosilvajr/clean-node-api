import request from 'supertest'

import app from '../config/app'

describe('SignUp Routers', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Ailton',
        email: 'aosilvajr@gmail.com',
        password: '123456',
        password_confirmation: '123456'
      })
      .expect(200)
  })
})
