const Tour = require("../models/Tour");

// GET ALL /api/tours
const getAllTours = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const search = req.query.search?.trim() || "";

        // Build query
        const query = search
            ? {
                  $or: [
                      { name: { $regex: search, $options: "i" } },
                      { destination: { $regex: search, $options: "i" } },
                  ],
              }
            : {};

        const [tours, total] = await Promise.all([
            Tour.find(query).skip(skip).limit(limit),
            Tour.countDocuments(query),
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

// GET BY ID /api/tours/:id
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
        const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);

        const newTour = new Tour({
            ...req.body,
            images: imagePaths,
        });

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
        const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);

        const updated = await Tour.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                ...(imagePaths.length > 0 && { images: imagePaths }),
            },
            { new: true, runValidators: true }
        );

        if (!updated)
            return res.status(404).json({ message: "Tour not found" });

        res.status(200).json(updated);
    } catch (err) {
        console.error("Error updating tour:", err);
        res.status(400).json({ message: err.message || "Update failed" });
    }
};

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
