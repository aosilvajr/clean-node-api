/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'

import { adaptRoute } from '../adapter/express-routes-adapter'
import { makeLoginController } from '../factories/login/login'
import { makeSignUpController } from '../factories/signup/signup'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
