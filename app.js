const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const morgan = require('morgan');

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello teams');
});

app.listen(PORT);
