export const loginParamsSchema = {
  type: 'object',
  property: {
    email: {
      type: 'email'
    },
    password: {
      type: 'string'
    }
  },
  required: ['email', 'password']
}
