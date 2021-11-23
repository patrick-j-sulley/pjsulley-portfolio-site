const express = require('express')
const router = express.Router()

if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
  const envConfig = require('dotenv').config()
  if (envConfig.error) throw envConfig.error
}

const mailgun = require('mailgun-js')({apiKey: process.env.API_KEY, domain: process.env.DOMAIN});


router.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const emailSubject = req.body.subject;
  const message = req.body.message;
  const mail = {
    from: `${name} <${email}>`,
    to: 'thepatrickjohnsullivan@gmail.com',
    subject: emailSubject,
    text: message,
  };

  mailgun.messages().send(mail, (error, body) => {
    console.log(body.message);
    if (error) {
      console.log(error)
      res.json({ status: error });
    } else {
      console.log('Message Sent')
      res.json({ status: "Message Sent" });
    }
  });
});

module.exports = router