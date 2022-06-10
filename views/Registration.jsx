const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <div className="registration form-input">
        <h1>Регистрация</h1>

        {/* <form method="POST" action="/">
          <input type="text" name="name" className="input" />
          <input type="text" name="login" className="input" />
          <input type="passwod" name="passwod" className="input" />
          <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
        </form> */}

        <form className="registration" method="post" action="/registr" id="registr">
          <div className="row mb-3">
            {/* <div htmlFor="inputEmail3" className="col-sm-2 col-form-label fw-semibold">Как тебя зовут?</div> */}
            <input type="text" name="name" id="name" className="form-control" placeholder="Как тебя зовут?" />

          </div>
          <div className="row mb-3">

            <input type="text" name="login" id="login" className="form-control" placeholder="Логин:" />
          </div>
          <div className="row mb-3">

            <input type="password" name="password" id="password" className="form-control" placeholder="Пароль:" />

          </div>
          <button type="submit" className="btn btn-primary">Войти</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Registration;
