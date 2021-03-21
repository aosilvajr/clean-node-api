export const loginPath = {
  post: {
    tags: ['Login'],
    summary: 'API para autenticar usuário',
    responses: {
      200: {
        description: 'Success',
        content: {
          'appplication/json': {
            schema: {
              $ref: '#/schemas/account'
            }
          }
        }
      }
    }
  }
}
