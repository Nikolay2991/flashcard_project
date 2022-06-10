const React = require('react');
const Layout = require('./Layout');

function Registration({title}) {
  return (
    <Layout title = {title}>
      <h1>Регистрация</h1>

      <form method="POST" action="/todo" id="task-form">
        <input type="text" name="name" />
        <input type="text" name="login" />
        <input type="passwod" name="passwod" />
        <button type="submit">Зарегистрироваться</button>
      </form>

      <script src="/script.js" />
    </Layout>
  );
}

module.exports = Registration;
