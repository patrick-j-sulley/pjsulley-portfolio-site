const server = require('./server')

const port = process.env.PORT || 3000

require('dotenv').config()

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
