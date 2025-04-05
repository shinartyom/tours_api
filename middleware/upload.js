const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Set storage engine
const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, "uploads/");
    },
    filename: function (_req, file, cb) {
        const ext = path.extname(file.originalname);
        const uniqueName = `${uuidv4()}${ext}`;
        cb(null, uniqueName);
    },
});

// File filter (optional)
const fileFilter = (_req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed!"), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max file size
});

module.exports = upload;
