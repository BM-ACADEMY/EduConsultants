const nodemailer = require('nodemailer');

const sendMail = async ({ name, email, phone, message, location, courseType, stream, year }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const courseText = Array.isArray(courseType) ? courseType.join(', ') : 'Not specified';

  const ownerMailOptions = {
    from: `"EduConsultants" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "📬 New Admission Form Received",
    html: `
      <div>
        <h2>New Admission Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Course Type:</strong> ${courseText}</p>
        <p><strong>Stream:</strong> ${stream}</p>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>
    `,
  };

  const userMailOptions = {
    from: `"EduConsultants" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "✅ Thank You for Your Enquiry!",
    html: `
      <div>
        <p>Dear ${name},</p>
        <p>Thank you for your enquiry. We have received your request and will contact you shortly.</p>
        <p>Regards,<br/>EduConsultants</p>
      </div>
    `,
  };

  await transporter.sendMail(ownerMailOptions);
  await transporter.sendMail(userMailOptions);
};

module.exports = sendMail;
