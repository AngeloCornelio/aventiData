const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

app.get('/', (req, res) => {
  res.send('AventiData root page');
})

app.listen(port, () => {
  console.log(`AventiData started on port ${port}`);
})

const { createInterface } = require('node:readline');
const rl = createInterface({input: process.stdin, output: process.stdout});
rl.on('line', line => {
  switch (line.trim()) {
    case 'exit':
    case 'quit':
    case 'q':
      console.log('Stopping server');
      process.exit(0);
      break;
    default:
      console.log('Unrecognized command');
  }
})
