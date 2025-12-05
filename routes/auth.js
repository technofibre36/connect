const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Middleware to protect routes
function isAuth(req, res, next) {
  if (req.session.userId) return next();
  res.redirect("/login");
}
// router.get("/",(req,res)=>{
//     res.render("index")
// })
/* ------------------- REGISTER ------------------ */
router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password: hashedPassword
  });

  res.redirect("/login");
});

/* ------------------- LOGIN ------------------ */
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.send("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Invalid credentials");

  req.session.userId = user._id;
  res.redirect("/dashboard");
});

/* ------------------- LOGOUT ------------------ */
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

/* ------------------- DASHBOARD ------------------ */
router.get("/dashboard", isAuth, async (req, res) => {
  const user = await User.findById(req.session.userId);
  res.render("dashboard", { user });
});

module.exports = router;
