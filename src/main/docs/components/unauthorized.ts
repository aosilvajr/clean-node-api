export const unauthorized = {
  description: 'Credenciais Inválidas',
  content: {
    'appplication/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
