const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <h1>Регистрация</h1>

      <form method="POST" action="/registr" id="registr">
        <input type="text" name="name" id="name" />
        <br />
        <br />
        <input type="text" name="login" id="login" />
        <br />
        <br />
        <input type="password" name="password" id="pass" />
        <br />
        <br />
        <button type="submit" name="js-registr">Зарегистрироваться</button>
      </form>

    </Layout>
  );
}

module.exports = Registration;
