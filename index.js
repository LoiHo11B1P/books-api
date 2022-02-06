const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// ENV 
require('dotenv').config();
const PORT = process.env.PORT;

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to mongo: ', process.env.MONGO_URI)
})

// CORS CONFIG
const coreOption = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
app.use(cors(coreOption))


// CONTROLLERS - ROUTING
const booksController = require('./controllers/books_controllers.js')
app.use('/books', booksController);

app.get('/', (req, res) => {
    res.status('200');
    res.send('Book API');
})

app.listen(PORT, () => {
    console.log('App listen on '+PORT);
})