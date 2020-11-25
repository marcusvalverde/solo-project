const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api.js');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// will send all req to the router 
app.use('/api', apiRouter);

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// respond with main app
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;