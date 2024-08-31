const allowedOrigins = [
  'http://localhost:5173', // Development
  'https://your-hr-rosy.vercel.app/', // Production
  // Add more domains as needed
];

const corsConfig = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

module.exports = corsConfig;
