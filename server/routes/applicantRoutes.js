const express = require('express');
const router = express.Router();
const { getApplicants, postApplicant } = require('../controllers/applicantController');

router.get('/applicant', getApplicants);
router.post('/post/applicant', postApplicant);

module.exports = router;
