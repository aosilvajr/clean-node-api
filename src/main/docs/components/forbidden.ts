export const forbidden = {
  description: 'Accesso Negado',
  content: {
    'appplication/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
