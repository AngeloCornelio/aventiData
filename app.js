const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('AventiData root page');
})

app.listen(port, () => {
  console.log(`AventiData started on port ${port}`);
})
