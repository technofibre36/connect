const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Middleware to protect routes
function isAuth(req, res, next) {
  if (req.session.userId) return next();
  res.status(401).json({ error: "Unauthorized" });
}

/* ------------------- REGISTER API ------------------ */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({ 
      message: "Registration successful",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error during registration" });
  }
});

/* ------------------- LOGIN API ------------------ */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Set session
    req.session.userId = user._id;

    res.json({ 
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error during login" });
  }
});

/* ------------------- LOGOUT API ------------------ */
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to logout" });
    }
    res.json({ message: "Logout successful" });
  });
});

/* ------------------- GET CURRENT USER API ------------------ */
router.get("/me", isAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
