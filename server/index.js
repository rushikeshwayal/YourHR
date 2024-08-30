const express = require('express');
const cors = require('cors');
const corsConfig = require('./config/corsConfig');
const applicantRoutes = require('./routes/applicantRoutes');
const jobRoutes = require('./routes/jobRoutes');
const { authorize, uploadFile } = require('./services/googleDriveService');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors(corsConfig));
app.use('/', applicantRoutes);
app.use('/', jobRoutes);

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Hello');
});

// Call Google Drive functions (ensure this is only for initial testing)
authorize().then(uploadFile).catch(console.error);

app.listen(PORT, () => {
  console.log(`App is live on http://localhost:${PORT}`);
});




module.exports = app;
