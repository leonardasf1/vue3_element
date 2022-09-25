const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const { charts } = require('./APIv1/tabs.json');
const data = require('./APIv0/data.json');
const port = 6006;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/APIv1/tabs', (req, res) => {
  res.send(JSON.stringify(charts))
})

app.get('/APIv0/data/1', (req, res) => {
  res.send(JSON.stringify(data))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
