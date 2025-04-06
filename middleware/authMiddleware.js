const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // you’ll get { userId, role }
        next();
    } catch (err) {
        return res.status(401).json({ message: "Token is not valid" });
    }
};

// Optional: role-based middleware
const requireAdmin = (req, res, next) => {
    if (req.user?.role !== "admin") {
        return res.status(403).json({ message: "Access denied: Admins only" });
    }
    next();
};

module.exports = {
    protect,
    requireAdmin,
};
