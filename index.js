const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const detailsRoutes = require("./routes/details");
const profileRoutes = require("./routes/profile");
const path = require("path");

const app = express();

// Connect MongoDB
connectDB();

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session middleware
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/authDB",
      collectionName: "sessions",
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
  })
);

// Home page route
app.get("/", (req, res) => {
  res.render("index");
});

// Auth routes
app.use("/", authRoutes);
// Details / discover routes
app.use("/", detailsRoutes);
// Profile/role routes
app.use("/", profileRoutes);

// Direct discover route (fallback) to ensure discover page is reachable
app.get('/discover', (req, res) => {
  res.render('discover');
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
