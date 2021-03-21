export const serverError = {
  description: 'Problema no Servidor',
  content: {
    'appplication/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
