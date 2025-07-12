const express = require('express');
const app = express();

// Define routes
app.get('/', (_req, res) => {
  res.send('Hello GitHub Actions');
});

module.exports = app;
