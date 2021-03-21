export const badRequest = {
  description: 'Requisição Inválida',
  content: {
    'appplication/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
