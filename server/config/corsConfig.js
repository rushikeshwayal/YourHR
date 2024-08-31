const cors = require('cors');

// List of allowed origins
const allowedOrigins = [
  'https://your-hr-client.vercel.app/',
  'http://localhost:3000', // Add other allowed origins if needed
];

const corsConfig = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Use the CORS configuration in your Express app
const express = require('express');
const app = express();

app.use(cors(corsConfig));

// Your routes and other middleware here

module.exports = corsConfig;
