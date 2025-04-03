const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            match: [/^\S+@\S+\.\S+$/, "Email must be a valid email address"],
        },
        phoneNumber: {
            type: String,
            required: [true, "Phone number is required"],
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
        },
        message: {
            type: String,
            required: [true, "Message is required"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", ContactSchema);
