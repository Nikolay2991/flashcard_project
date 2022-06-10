const React = require('react');
const Layout = require('./Layout');

function Input() {
  return (
    <Layout>
      <div className="registration">
        <h1>Зайди на свою страничку</h1>

        <form method="POST" action="/">
          <input type="text" name="login" className="input" />
          <input type="passwod" name="passwod" className="input" />
          <button type="submit" className="btn btn-primary">Войти</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Input;
