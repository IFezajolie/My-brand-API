const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mybrand', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// define the routes related to user actions

const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('/src/routes/userRoutes');
app.use('/api', userRoutes);
app.use('/api', authRoutes);

// ...other middleware and routes

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// const app = require('./src/app');

const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });