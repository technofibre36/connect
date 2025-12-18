const mongoose = require('mongoose');

const StartupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tagline: String,
  industry: String,
  stage: String,
  location: String,
  contact: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Startup', StartupSchema);
