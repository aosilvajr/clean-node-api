import {
  badRequest,
  serverError,
  forbidden,
  unauthorized,
  notFound
} from './components/'
import { apiKeyAuthSchema } from './schemas/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden
}
