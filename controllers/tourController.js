const Tour = require("../models/Tour");

const getAllTours = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const [tours, total] = await Promise.all([
            Tour.find().skip(skip).limit(limit),
            Tour.countDocuments(),
        ]);

        res.status(200).json({
            total,
            page,
            totalPages: Math.ceil(total / limit),
            data: tours,
        });
    } catch (err) {
        console.error("Error fetching tours:", err);
        res.status(500).json({ message: "Server error" });
    }
};

// GET /api/tours/:id - Public
const getSingleTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) return res.status(404).json({ message: "Tour not found" });

        res.status(200).json(tour);
    } catch (err) {
        console.error("Error fetching tour:", err);
        res.status(500).json({ message: "Server error" });
    }
};

// POST /api/tours - Admin only
const createTour = async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        const saved = await newTour.save();
        res.status(201).json(saved);
    } catch (err) {
        console.error("Error creating tour:", err);
        res.status(400).json({ message: err.message || "Invalid data" });
    }
};

// PUT /api/tours/:id - Admin only
const updateTour = async (req, res) => {
    try {
        const updated = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updated)
            return res.status(404).json({ message: "Tour not found" });

        res.status(200).json(updated);
    } catch (err) {
        console.error("Error updating tour:", err);
        res.status(400).json({ message: err.message || "Update failed" });
    }
};

// DELETE /api/tours/:id - Admin only
const deleteTour = async (req, res) => {
    try {
        const deleted = await Tour.findByIdAndDelete(req.params.id);
        if (!deleted)
            return res.status(404).json({ message: "Tour not found" });

        res.status(200).json({ message: "Tour deleted" });
    } catch (err) {
        console.error("Error deleting tour:", err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getAllTours,
    getSingleTour,
    createTour,
    updateTour,
    deleteTour,
};
