const express = require("express");
const router = express.Router();
const { getAllTourGuides } = require("../controllers/tourGuideController");

router.get("/", getAllTourGuides);

module.exports = router;
