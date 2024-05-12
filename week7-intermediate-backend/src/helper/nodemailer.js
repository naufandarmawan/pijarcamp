const nodemailer = require('nodemailer');
const transporter = require('../configs/nodemailer')

// Function to send verification email
const sendVerificationEmail = async (email, verificationToken) => {
    try {
        await transporter.sendMail({
            from: process.env.SENDGRID_EMAIL,
            to: email,
            subject: "Peworld Account - Email Verification",
            text: `Please click on the following link to verify your email: ${process.env.SITE}/auth/verify?token=${verificationToken}`, // plain text body
            html: `<p>Please click <a href="${process.env.SITE}/auth/verify?token=${verificationToken}">here</a> to verify your email</p>`, // html body
          });

        console.log('Email sent');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendVerificationEmail
