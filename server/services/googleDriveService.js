// const fs = require('fs');
// const path = require('path');
// const { google } = require('googleapis');
// const multer = require('multer');
// const express = require('express');
// const router = express.Router();
// const db = require('../Database/database');

// // Configure multer for file uploads
// const upload = multer({ dest: 'uploads/' });

// const SCOPE = ['https://www.googleapis.com/auth/drive'];
// const DRIVE_FOLDER_ID = 'your-google-drive-folder-id'; // Replace with your folder ID

// async function authorize() {
//   const jwtClient = new google.auth.JWT(
//     process.env.GOOGLE_CLIENT_EMAIL,
//     null,
//     process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//     SCOPE
//   );

//   await jwtClient.authorize();
//   return jwtClient;
// }

// async function uploadFile(authClient, filePath, fileName) {
//   return new Promise((resolve, reject) => {
//     const drive = google.drive({ version: 'v3', auth: authClient });

//     const fileMetaData = {
//       name: fileName,
//       parents: [DRIVE_FOLDER_ID]
//     };

//     drive.files.create({
//       resource: fileMetaData,
//       media: {
//         body: fs.createReadStream(filePath),
//         mimeType: 'application/pdf'
//       },
//       fields: 'id, webViewLink'
//     }, (error, file) => {
//       if (error) {
//         return reject(error);
//       }
//       resolve(file.data);
//     });
//   });
// }

// const postapplyJob = async (req, res) => {
//   const { email, why_hired, job_id } = req.body;
//   const resume = req.file; // File info from multer

//   if (!resume) {
//     return res.status(400).send({ msg: 'Resume file is required' });
//   }

//   try {
//     const authClient = await authorize();
//     const uploadedFile = await uploadFile(authClient, resume.path, resume.originalname);

//     const resumeLink = uploadedFile.webViewLink;

//     // Save job application to the database
//     const result = await db.query(
//       'INSERT INTO job_apply_applications (email, resume_link, why_hired, job_id) VALUES ($1, $2, $3, $4) RETURNING *',
//       [email, resumeLink, why_hired, job_id]
//     );

//     fs.unlinkSync(resume.path); // Clean up the uploaded file

//     res.status(200).json(result.rows[0]);
//   } catch (error) {
//     console.error('Error processing application:', error);
//     res.status(500).send({ msg: 'Error occurred while applying for the job' });
//   }
// };

// // Apply job application
// router.post('/apply', upload.single('resume'), postapplyJob);

// module.exports = { postapplyJob };
