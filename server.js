const express = require('express');
const bodyParser = require("body-parser");
const ejs = require('ejs');
const db = require('./config/connection');
// const routes = require('./routes');
const mongoose = require('mongoose');

const PORT = process.env.port || 3001;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(express.json());
// app.use(routes);

const articleSchema ={
    title:String,
    content:String
};

const Article = mongoose.model('Article', articleSchema)


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
