const Contact = require("../models/contact.model");
const sendEmail = require("../services/email.service");

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Save to DB
    await Contact.create({ name, email, message });

    // Send Email
    await sendEmail({ name, email, message });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};