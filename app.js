require('@babel/register');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const morgan = require('morgan');
const Registration = require('./views/Registration.jsx');

const regRouter = require('./routes/registration.routes');

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {

//   res.send('Hello teams');
// });
app.get('/', (req, res) => {
  const home = React.createElement(Registration, {title: 'Kek'});
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


app.use('/reg', regRouter);

app.listen(PORT);
