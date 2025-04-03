const express = require("express");
const {
    createContact,
    getAllContacts,
} = require("../controllers/contactController");
const { protect, requireAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Public route
router.post("/", createContact);

// Admin-only route
router.get("/", protect, requireAdmin, getAllContacts);

module.exports = router;
