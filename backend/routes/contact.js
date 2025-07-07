const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const ContactMessage = require("../models/contactMessage");

// Route to handle contact form submission
router.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  // Debug: Check request body
  console.log("Received contact form submission:", req.body);

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    // Save message to MongoDB
    await ContactMessage.create({ name, email, message });

    // Send email to your inbox
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `
You've received a new message from your portfolio:

Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    res
      .status(200)
      .json({ success: true, message: "Message sent and saved successfully." });
  } catch (error) {
    console.error("Error handling contact form:", error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error. Try again." });
  }
});

module.exports = router;
