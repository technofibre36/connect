const express = require('express');
const router = express.Router();
const Investor = require('../models/investor');
const Startup = require('../models/startup');

// Render discover page
router.get('/discover', (req, res) => {
	res.render('discover');
});

// API: search investors
// GET /api/investors?q=term
router.get('/api/investors', async (req, res) => {
	try {
		const q = req.query.q || '';
		const filter = q
			? {
					$or: [
						{ name: { $regex: q, $options: 'i' } },
						{ industries: { $regex: q, $options: 'i' } },
						{ bio: { $regex: q, $options: 'i' } }
					]
				}
			: {};
		const docs = await Investor.find(filter).limit(50).lean();
		res.json(docs);
	} catch (err) {
		console.error('api/investors error', err);
		res.status(500).json({ error: 'Server error' });
	}
});

// API: create investor (for seeding/testing)
// POST /api/investors
router.post('/api/investors', async (req, res) => {
	try {
		const inv = new Investor(req.body);
		await inv.save();
		res.status(201).json(inv);
	} catch (err) {
		console.error('create investor error', err);
		res.status(400).json({ error: err.message });
	}
});

// API: search startups
router.get('/api/startups', async (req, res) => {
	try {
		const q = req.query.q || '';
		const filter = q
			? {
					$or: [
						{ name: { $regex: q, $options: 'i' } },
						{ tagline: { $regex: q, $options: 'i' } },
						{ industry: { $regex: q, $options: 'i' } }
					]
				}
			: {};
		const docs = await Startup.find(filter).limit(50).lean();
		res.json(docs);
	} catch (err) {
		console.error('api/startups error', err);
		res.status(500).json({ error: 'Server error' });
	}
});

// API: create startup (for seeding/testing)
router.post('/api/startups', async (req, res) => {
	try {
		const s = new Startup(req.body);
		await s.save();
		res.status(201).json(s);
	} catch (err) {
		console.error('create startup error', err);
		res.status(400).json({ error: err.message });
	}
});

module.exports = router;
