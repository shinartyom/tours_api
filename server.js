require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const authRoutes = require("./routes/authRoutes");
const tourRoutes = require("./routes/tourRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
