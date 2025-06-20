const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like images, CSS, JS)
app.use(express.static(__dirname));

// Route to serve portfolio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Portfolio.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🌐 Server is running: http://localhost:${PORT}`);
});
