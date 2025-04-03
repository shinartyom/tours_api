const express = require("express");
const {
    getAllTours,
    getSingleTour,
    createTour,
    updateTour,
    deleteTour,
} = require("../controllers/tourController");

const { protect, requireAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.get("/", getAllTours);
router.get("/:id", getSingleTour);

// Protected routes (admin only)
router.post("/", protect, requireAdmin, createTour);
router.put("/:id", protect, requireAdmin, updateTour);
router.delete("/:id", protect, requireAdmin, deleteTour);

module.exports = router;
