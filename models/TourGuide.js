const mongoose = require("mongoose");

const TourGuideSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        avatarUrl: {
            type: String, // URL to uploaded image
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("TourGuide", TourGuideSchema);
