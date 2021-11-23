const express = require('express')
const path = require('path')
const server = express()
const cors = require('cors');
const nodemailer = require('nodemailer');

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

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  
module.exports = server
