const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/api");
const path = require("path");

const app = express();

// Connect MongoDB
connectDB();

// CORS configuration for Next.js frontend
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

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

// API routes (JSON responses)
app.use("/api", apiRoutes);

// Auth routes (EJS views)
app.use("/", authRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
