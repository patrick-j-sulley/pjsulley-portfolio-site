const express = require('express')
const router = express.Router()
const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  },
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const emailSubject = req.body.subject;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.SMTP_USER,
    subject: emailSubject,
    html: `
      <h2>New messaged received from patricksullivan.live!</h2>
      <h3>Name</h3> <p>${name}</p>
      <h3>Email</h3> <p>${email}</p>
      <h3>Subject</h3> <p>${emailSubject}</p>
      <h3>Message</h3> <p>${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error)
      res.json({ status: "ERROR" });
    } else {
      console.log('Message Sent')
      res.json({ status: "Message Sent" });
    }
  });
});

module.exports = router