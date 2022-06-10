const ReactDOMServer = require('react-dom/server');
const React = require('react');
const regRouter = require('express').Router();
const { User } = require('../db/models');

const Reg = require('../views/Registration');
const Input = require('../views/Input');

// Отрисовка страницы регистрации
regRouter.get('/reg', (req, res) => {
  const reg = React.createElement(Reg);
  const html = ReactDOMServer.renderToStaticMarkup(reg);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

// Запись пользователя в базу после регистрации
regRouter.post('/registr', async (req, res) => {
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

// Отрисовка страницы входа
regRouter.get('/in', (req, res) => {
  const input = React.createElement(Input);
  const html = ReactDOMServer.renderToStaticMarkup(input);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

// Поиск пользователя в базу после входа
regRouter.post('/input', async (reg, res) => {
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

module.exports = regRouter;
