const express = require("express");
const { getTourServices, getTags } = require("../controllers/metaController");

const router = express.Router();

router.get("/services", getTourServices);
router.get("/tags", getTags);

module.exports = router;
