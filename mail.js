const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'tayyabzulfiqar348@gmail.com',
          pass: 'ssmm bwrs jbxf lnqk',
        },
      });

    const mailOptions = {
        from: {
          name: "Testing Nodemailer",
          address: 'tayyabzulfiqar348@gmail.com',
        },
        to: 'abdulla786858@gmail.com',
        subject: "I am testing node mailer",
        text: `Hi , Test is Successfull`,
      };

      transporter.sendMail(mailOptions);