require('@babel/register');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const morgan = require('morgan');
const Registration = require('./views/Registration');
const Input = require('./views/Input');
const Thems = require('./views/Thems');
const { User } = require('./db/models');

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/reg');
});

// app.get('/', (req, res) => {
//   const home = React.createElement(Registration, {title: 'Kek'});
//   const html = ReactDOMServer.renderToStaticMarkup(home);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });

app.get('/reg', (req, res) => {
  const reg = React.createElement(Registration);
  const html = ReactDOMServer.renderToStaticMarkup(reg);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.post('/registr', async (req, res) => {
  const result = await User.findOne({ where: { email: req.body.mail }});
  if (result === null) {
    await User.create({
      user_name: req.body.name,
      email: req.body.mail,
      password: req.body.password,
    });
    res.end('true');
  } else {
    res.end('false');
  }
});

app.get('/in', (req, res) => {
  const input = React.createElement(Input);
  const html = ReactDOMServer.renderToStaticMarkup(input);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.post('/input', async (reg, res) => {
  const result = await User.findOne({
    where: {
      email: reg.body.male,
      password: reg.body.password,
    },
  });

  if (result === null) {
    res.end('Такого пользователя не существует :(\nПопробуйте еще раз..');
  } else {
    res.redirect('/');
  }
});

app.get('/themes', (req, res) => {
  const thems = React.createElement(Thems);
  const html = ReactDOMServer.renderToStaticMarkup(thems);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.listen(PORT);
