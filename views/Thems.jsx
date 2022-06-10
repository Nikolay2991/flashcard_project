const React = require('react');
const Layout = require('./Layout');

function Themes() {
  return (
    <Layout>
      <div className="themes">

        <form method="post" action="/question/1" data-id="1">
          <button className="theme-btn" type="submit">Большой Лебовски</button>
        </form>

        <form method="post" action="/question/2" data-id="2">
          <button className="theme-btn" type="submit">Harry potter</button>
        </form>

        <form method="post" action="/question/3" data-id="3">
          <button className="theme-btn" type="submit">Сериал: Клиника</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Themes;
