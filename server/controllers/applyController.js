const fs = require('fs');
const { google } = require('googleapis');
const db = require('../Database/database');
const multer = require('multer');
const { PassThrough } = require('stream');

// Configure multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

const SCOPE = ['https://www.googleapis.com/auth/drive'];
const DRIVE_FOLDER_ID = '1W6Wy0PlsLWKZbGWGBUU2eaYRI8NCQvPp'; // Replace with your folder ID

async function authorize() {
  const jwtClient = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    SCOPE
  );

  await jwtClient.authorize();
  return jwtClient;
}

async function uploadFile(authClient, fileBuffer, fileName) {
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: 'v3', auth: authClient });

    const fileMetaData = {
      name: fileName,
      parents: [DRIVE_FOLDER_ID],
    };

    const media = {
      mimeType: 'application/pdf', // Adjust the mimeType based on your file type
      body: PassThrough().end(fileBuffer), // Use PassThrough to handle buffer as a stream
    };

    drive.files.create(
      {
        resource: fileMetaData,
        media: media,
        fields: 'id, webViewLink',
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        resolve(file.data);
      }
    );
  });
}

const getapplyJob = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM job_apply_applications');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching job applications:', error.message);
    res.status(500).send({ msg: 'Error occurred while fetching job applications' });
  }
};

const postapplyJob = async (req, res) => {
  const { email, why_hired, job_id } = req.body;
  console.log(req.body);
  const resume = req.file; // File info from multer memory storage

  if (!resume) {
    return res.status(400).send({ msg: 'Resume file is required' });
  }

  try {
    const authClient = await authorize();
    const uploadedFile = await uploadFile(authClient, resume.buffer, resume.originalname);

    const resumeLink = uploadedFile.webViewLink;

    // Save job application to the database
    const result = await db.query(
      'INSERT INTO job_apply_applications (email, resume_link, why_hired, job_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, resumeLink, why_hired, job_id]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error processing application:', error.message);
    res.status(500).send({ msg: 'Error occurred while applying for the job' });
  }
};

module.exports = { getapplyJob, postapplyJob, upload };
