const React = require('react');
const Layout = require('./Layout');

function Main({ title }) {
  return (
    <Layout title={title}>
      {/* <div class='registration'> */}
      {/* <h1>Регистрация</h1> */}

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <form className="form-reg" method="post" action="/reg">
                <button className="btn btn-outline-primary" type="submit">Зарегистрироваться</button>
              </form>
              <form className="form-in" method="post" action="/in">
                <button className="btn btn-outline-primary" type="submit">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <script src="/script.js" />
    </Layout>
  );
}

module.exports = Main;
