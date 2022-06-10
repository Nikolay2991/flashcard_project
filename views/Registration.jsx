const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <div className="registration">
        <h1>Регистрация</h1>

        <form method="POST" action="/">
          <input type="text" name="name" className="input" />
          <input type="text" name="login" className="input" />
          <input type="passwod" name="passwod" className="input" />
          <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Registration;
