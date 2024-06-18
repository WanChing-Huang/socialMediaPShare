const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/simple', (req, res) => {
  res.json({ test: 'successful' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
