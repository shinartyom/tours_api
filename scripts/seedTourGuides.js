// Description: This script seeds the TourGuide collection in the database with sample data. It connects to the database, deletes any existing TourGuide documents, and inserts new ones based on the provided seed data.

require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const TourGuide = require("../models/TourGuide");

const seedData = [
    {
        name: "Jayvion Simon",
        avatar: "avatar-1.webp",
        phoneNumber: "+1 202-555-0143",
    },
    {
        name: "Lucian Obrien",
        avatar: "avatar-2.webp",
        phoneNumber: "+1 416-555-0198",
    },
    {
        name: "Deja Brady",
        avatar: "avatar-3.webp",
        phoneNumber: "+44 20 7946 0958",
    },
    {
        name: "Harrison Stein",
        avatar: "avatar-4.webp",
        phoneNumber: "+61 2 9876 5432",
    },
    {
        name: "Reece Chung",
        avatar: "avatar-5.webp",
        phoneNumber: "+91 22 1234 5678",
    },
    {
        name: "Lainey Davidson",
        avatar: "avatar-6.webp",
        phoneNumber: "+49 30 123456",
    },
    {
        name: "Cristopher Cardenas",
        avatar: "avatar-7.webp",
        phoneNumber: "+33 1 23456789",
    },
    {
        name: "Melanie Noble",
        avatar: "avatar-8.webp",
        phoneNumber: "+81 3 1234 5678",
    },
    {
        name: "Chase Day",
        avatar: "avatar-9.webp",
        phoneNumber: "+86 10 1234 5678",
    },
    {
        name: "Shawn Manning",
        avatar: "avatar-10.webp",
        phoneNumber: "+55 11 2345-6789",
    },
    {
        name: "Soren Durham",
        avatar: "avatar-11.webp",
        phoneNumber: "+27 11 123 4567",
    },
    {
        name: "Cortez Herring",
        avatar: "avatar-12.webp",
        phoneNumber: "+7 495 123-4567",
    },
];

const seed = async () => {
    await connectDB();

    await TourGuide.deleteMany();
    await TourGuide.insertMany(
        seedData.map(({ name, phoneNumber, avatar }) => ({
            name,
            phoneNumber,
            avatarUrl: `/uploads/${avatar}`,
        }))
    );

    console.log("✅ Tour guides seeded successfully!");
    process.exit();
};

seed();
