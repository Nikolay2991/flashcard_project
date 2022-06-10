const React = require('react');
const Layout = require('./Layout');

function Input() {
  return (
    <Layout>

      <form className="form-input">
        <div>
          <h1>Авторизация</h1>
        </div>
        <div className="row mb-3">

          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Логин:" />
          </div>
        </div>
        <div className="row mb-3">

          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Пароль:" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>

    </Layout>
  );
}

module.exports = Input;
