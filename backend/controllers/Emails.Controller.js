const nodemailer = require("nodemailer");

async function mail({to, subject, html}) {
 
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
  });

  await transporter.sendMail({
    from: 'khaledfaour2@gmail.com', // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  }).then(info => {
    console.log("Email: ", info);
  });

}

module.exports = { mail}