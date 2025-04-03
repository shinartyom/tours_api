const Contact = require("../models/Contact");

// POST /api/contact - Public
const createContact = async (req, res) => {
    const { name, email, subject, message, phoneNumber } = req.body;

    try {
        const contact = new Contact({
            name,
            email,
            subject,
            message,
            phoneNumber,
        });
        const saved = await contact.save();
        res.status(201).json(saved);
    } catch (err) {
        console.error("Error saving contact form:", err.message);
        res.status(400).json({
            message: err.message || "Invalid contact data",
        });
    }
};

// GET /api/contact - Admin only
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (err) {
        console.error("Error fetching contact submissions:", err.message);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    createContact,
    getAllContacts,
};
