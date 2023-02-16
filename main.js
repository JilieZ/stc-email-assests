const nodemailer = require("nodemailer");
const fs = require("fs");

//read html email
const main = async () => {
  const emailContent = fs.readFileSync(
    __dirname + "/email-templates/confirmation-email.html",
    "utf8",
    (err, html) => {
      if (err) {
        throw err;
      }
      return html;
    }
  );

  // Create a nodemailer transporter with SMTP details
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "zengjilie@gmail.com",
      pass: "qujlmkljojoovlhq",
    },
  });

  // Setup email data with unicode symbols
  const mailOptions = {
    from: "zengjilie@gmail.com",
    // to: "jilie.zeng@stitch3d.io",
    to: "zengjilie@utexas.edu",
    subject: "Hello from nodemailer!",
    text: "This is a test email sent from nodemailer",
    html: emailContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error: " + error);
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent!");
    }
  });
};

try {
  main();
} catch (err) {
  throw err;
}
