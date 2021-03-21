import components from './components'
import paths from './paths'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API do curso do Mango par arealizar enquetes entre programadores',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-latest',
    url: 'https://spdx.org/licenses/AGPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquete'
  }],
  paths,
  schemas,
  components
}
