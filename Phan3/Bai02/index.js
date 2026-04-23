const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello from Node.js with MongoDB Healthcheck! Connection status: ' + mongoose.connection.readyState);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
