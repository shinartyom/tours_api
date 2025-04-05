const TourGuide = require("../models/TourGuide");

const getAllTourGuides = async (_req, res) => {
    try {
        const guides = await TourGuide.find();
        res.json(guides);
    } catch (err) {
        console.error("Error fetching tour guides:", err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getAllTourGuides };
