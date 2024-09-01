const corsConfig = {
  origin: function (origin, callback) {
    // Define the list of allowed origins
    const allowedOrigins = ['http://localhost:5173', 'https://your-hr-client.vercel.app'];

    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      // If the origin is in the allowed list, allow the request
      callback(null, true);
    } else {
      // Otherwise, deny the request
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true, // Allow cookies or other credentials in cross-domain requests
};

module.exports = corsConfig;