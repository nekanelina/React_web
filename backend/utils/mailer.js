const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // These environment variables will be pulled from the .env file
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // send mail with defined transport object
  const r = await transporter.sendMail({
    from: "infoecommerce444@gmail.com", // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
  });
  return r;
};

module.exports = sendEmail;
