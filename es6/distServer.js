import express from 'express'
import path from 'path'
import open from 'open'
import compression from 'compression'
import Rollbar from 'rollbar'
require('dotenv').config()

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_SERVER_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
})
rollbar.log('Hello world!')

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.get('/users', (req, res) => {
  // hard coding for simplicity
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName": "Norten", "email": "tnorton@yahoo.com"},
    {"id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com"}
  ])
})

app.use(express.static(path.join(__dirname, '../dist')))
app.use(compression)

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log('Listening on port: ', port)
  open('http://localhost:' + port);
})
