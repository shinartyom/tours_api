const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
                phone: user.phone || null,
            },
        });
    } catch (err) {
        console.error("Login error:", err.message);
        res.status(500).json({ message: "Server error" });
    }
};

const registerUser = async (req, res) => {
    const { email, password, phone, role = "admin" } = req.body;

    try {
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            phone,
            role,
        });

        const token = jwt.sign(
            { userId: newUser._id, role: newUser.role },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        res.status(201).json({
            token,
            user: {
                id: newUser._id,
                email: newUser.email,
                role: newUser.role,
                phone: newUser.phone,
            },
        });
    } catch (err) {
        console.error("Error creating user:", err.message);
        res.status(500).json({ message: "Server error" });
    }
};

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ user });
    } catch (err) {
        console.error("Error in /auth/me:", err.message);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { loginUser, registerUser, getMe };
