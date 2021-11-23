const express = require('express')
const path = require('path')
const server = express()
const cors = require('cors');

if(!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
  const envConfig = require('dotenv').config()
  if(envConfig.error) throw envConfig.error
}

server.use(express.json())
server.use(cors());
server.use(express.static(__dirname + '/public'))
server.use(express.urlencoded({extended:false}))

server.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const contactRoutes = require('./routes/contact')
server.use('/api/v1/contact',contactRoutes)
  
module.exports = server
