const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3600;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port);

// Go to tracking page.
app.get('/tracking', function(req, res) {
  res.sendFile(__dirname + '/public/tracking/tracking.html');
});

// Send contact form email.
app.post('/sendContactForm', function(req, res) {
  console.log('Sending email!!');
  console.log(req.body);
  res.send('Handle contact form. Work in progress.');

  // const mailOptions = {
  //   from: 's.roibon@gmail.com',
  //   to: 's.roibon@gmail.com',
  //   subject: 'Test form We Carry.',
  //   html: '<h1>Contact form Test We carry.</h1>'
  // };
  // transporter.sendMail(mailOptions, function(err, info) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(info);
  //   }
  // });
});

console.log(`App server running on  port: ${port}`);
