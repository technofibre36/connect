const mongoose = require('mongoose');

const InvestorSchema = new mongoose.Schema({
	name: { type: String, required: true },
	bio: { type: String },
	industries: [String],
	location: String,
	stagePreference: [String],
	contact: String,
	createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Investor', InvestorSchema);