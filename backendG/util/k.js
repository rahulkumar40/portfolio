const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
    try {
        // Create transporter (Gmail or custom SMTP)
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,         // e.g. smtp.gmail.com
            port: process.env.MAIL_PORT || 587,  // 587 = TLS, 465 = SSL
            secure: process.env.MAIL_PORT == 465, // true for 465, false for 587
            auth: {
                user: process.env.MAIL_USER,     // your email
                pass: process.env.MAIL_PASS,     // your app password
            },
        });

        // Send mail
        let info = await transporter.sendMail({
            from: `"Rahul Kumar" <${process.env.MAIL_USER}>`,
            to: email,
            subject: title,
            html: body,
        });

        return info;

    } catch (err) {
        console.error(" Error while sending email:", err.message);

        let testAccount = await nodemailer.createTestAccount();

        let testTransporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        let testInfo = await testTransporter.sendMail({
            from: `"Rahul Kumar (Test)" <${testAccount.user}>`,
            to: email,
            subject: title,
            html: body,
        });

        return testInfo;
    }
};

module.exports = mailSender;
