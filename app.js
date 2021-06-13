const express = require('express');
const app = express();

const path = require('path');
const port = 5000

// serve files from the views folder
app.use(express.static('views'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/contact-me.html'));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'views/404.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});