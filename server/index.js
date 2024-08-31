const express = require('express');
const cors = require('cors');
const corsConfig = require('./config/corsConfig');
const applicantRoutes = require('./routes/applicantRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applyRoutes = require('./routes/applyRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(express.json());
app.use(cors(corsConfig));

// Route handlers
app.use(applicantRoutes); // Removed '/' prefix to avoid overriding
app.use(jobRoutes);
app.use(applyRoutes);

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`App is live on http://localhost:${PORT}`);
});

module.exports = app;
