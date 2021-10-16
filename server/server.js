const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const server = express()

server.use(express.json())
server.use(express.static(__dirname + '/public'))

server.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

server.listen(port)

module.exports = server
