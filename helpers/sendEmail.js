const nodemailer = require("nodemailer");
require("dotenv").config();

const { MAILTRAP_PASS, MAILTRAP_USER } = process.env;

const nodemailerConfig = {
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: MAILTRAP_USER };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
