const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Investor = require('../models/investor');
const Startup = require('../models/startup');

function isAuth(req, res, next) {
  if (req.session && req.session.userId) return next();
  res.redirect('/login');
}

// Choose role page
router.get('/choose-role', isAuth, (req, res) => {
  res.render('choose-role');
});

// Submit chosen role
router.post('/choose-role', isAuth, async (req, res) => {
  const role = req.body.role;
  if (!['investor', 'startup'].includes(role)) return res.redirect('/choose-role');
  await User.findByIdAndUpdate(req.session.userId, { role });
  if (role === 'investor') return res.redirect('/profile/investor');
  return res.redirect('/profile/startup');
});

// Investor profile (KYC) form
router.get('/profile/investor', isAuth, async (req, res) => {
  const user = await User.findById(req.session.userId).lean();
  let data = {};
  if (user && user.profileRef && user.role === 'investor') {
    data = await Investor.findById(user.profileRef).lean() || {};
  }
  res.render('investor-profile', { user, data });
});

router.post('/profile/investor', isAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);
    const payload = {
      name: req.body.name || user.name,
      bio: req.body.bio,
      industries: req.body.industries ? req.body.industries.split(',').map(s=>s.trim()).filter(Boolean) : [],
      location: req.body.location,
      stagePreference: req.body.stagePreference ? req.body.stagePreference.split(',').map(s=>s.trim()).filter(Boolean) : [],
      contact: req.body.contact
    };
    let inv;
    if (user.profileRef && user.role === 'investor') {
      inv = await Investor.findByIdAndUpdate(user.profileRef, payload, { new: true });
    } else {
      inv = new Investor(payload);
      await inv.save();
      user.profileRef = inv._id;
    }
    user.role = 'investor';
    user.profileComplete = true;
    await user.save();
    res.redirect('/dashboard');
  } catch (err) {
    console.error('save investor profile', err);
    res.status(500).send('Error saving profile');
  }
});

// Startup profile (KYC) form
router.get('/profile/startup', isAuth, async (req, res) => {
  const user = await User.findById(req.session.userId).lean();
  let data = {};
  if (user && user.profileRef && user.role === 'startup') {
    data = await Startup.findById(user.profileRef).lean() || {};
  }
  res.render('startup-profile', { user, data });
});

router.post('/profile/startup', isAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);
    const payload = {
      name: req.body.name || user.name,
      tagline: req.body.tagline,
      industry: req.body.industry,
      stage: req.body.stage,
      location: req.body.location,
      contact: req.body.contact
    };
    let s;
    if (user.profileRef && user.role === 'startup') {
      s = await Startup.findByIdAndUpdate(user.profileRef, payload, { new: true });
    } else {
      s = new Startup(payload);
      await s.save();
      user.profileRef = s._id;
    }
    user.role = 'startup';
    user.profileComplete = true;
    await user.save();
    res.redirect('/dashboard');
  } catch (err) {
    console.error('save startup profile', err);
    res.status(500).send('Error saving profile');
  }
});

module.exports = router;
