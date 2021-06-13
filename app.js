const express = require('express');
const app = express();
const port = 5000

// serve files from the views folder
app.use(express.static('views'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})