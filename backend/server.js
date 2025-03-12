const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const socialMediaRoutes = require('./routes/socialMedia');
const postRoutes = require('./routes/post');
const scheduleRoutes = require('./routes/schedule');
const { MONGO_URI, PORT } = require('./config');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/social-media', socialMediaRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/schedules', scheduleRoutes);

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
