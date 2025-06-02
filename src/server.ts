// const app = require('fastify')

import fastify from 'fastify';

const app = fastify() as any

app.get('/hello', () => {
  return 'Hello World'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running!')
})