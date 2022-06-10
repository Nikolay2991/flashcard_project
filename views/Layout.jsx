const React = require('react');

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <title>Form example</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="/style.css" />
      </head>
      <body>
      {/* <nav className="navbar navbar-expand-lg bg-light">
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
      </nav> */}
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous" />
        <script defer src="/js/client.js" />
      </body>
    </html>
  );
}

module.exports = Layout;
