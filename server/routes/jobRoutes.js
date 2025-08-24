const express = require('express');
const router = express.Router();
const { getJobs ,postJob} = require('../controllers/jobController');

router.get('/job', getJobs);
router.post('/post/job', postJob);
module.exports = router;
