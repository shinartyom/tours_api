const mongoose = require("mongoose");

const TourGuideSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    phoneNumber: { type: String, required: true },
});

const AvailableSchema = new mongoose.Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

const TourSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        content: {
            type: String,
            required: [true, "Content is required"],
        },
        images: {
            type: [String],
            required: [true, "Images are required"],
        },
        tourGuides: {
            type: [TourGuideSchema],
            validate: {
                validator: function (v) {
                    return Array.isArray(v) && v.length > 0;
                },
                message: "Must have at least 1 guide",
            },
        },
        available: {
            type: AvailableSchema,
            required: true,
            validate: {
                validator: function (v) {
                    return v.startDate <= v.endDate;
                },
                message: "End date cannot be earlier than start date",
            },
        },
        durations: {
            type: String,
            required: [true, "Durations is required"],
        },
        destination: {
            type: String,
            required: [true, "Destination is required"],
        },
        services: {
            type: [String],
            validate: {
                validator: function (v) {
                    return Array.isArray(v) && v.length >= 2;
                },
                message: "Must have at least 2 services",
            },
        },
        tags: {
            type: [String],
            validate: {
                validator: function (v) {
                    return Array.isArray(v) && v.length >= 2;
                },
                message: "Must have at least 2 tags",
            },
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },
        publish: {
            type: Boolean,
            default: true,
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
        },
        salePrice: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Tour", TourSchema);
