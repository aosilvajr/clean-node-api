import { MissinParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpResponse, HttpRequest } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissinParamError('name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissinParamError('email'))
    }
  }
}
