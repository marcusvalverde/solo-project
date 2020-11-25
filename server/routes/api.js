const express = require('express');

const jobController = require('../controllers/jobController.js');

const router = express.Router();

router.get('/',
  jobController.getJobs,
  (req, res) => res.status(200).json(res.locals.companies)
);
router.post('/jobs',
  jobController.postJobs,
  (req, res) => res.status(200).json({})
);

module.exports = router;