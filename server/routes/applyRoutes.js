const express = require('express');
const router = express.Router();
const { getapplyJob, postapplyJob, upload } = require('../controllers/applyController');

// Route to get job applications
router.get('/apply', getapplyJob);

// Route to post a job application with file upload
router.post('/post/apply', upload.single('resume'), postapplyJob);

module.exports = router;
