const React = require('react');
const Layout = require('./Layout');

function Themes({ title }) {
  return (
    <Layout title={title}>
      <div className="themes">

        <form method="" action="" id="">
          <button type="submit">Тема 1</button>
        </form>

        <form method="" action="" id="">
          <button type="submit">Тема 2</button>
        </form>

        <form method="" action="" id="">
          <button type="submit">Тема 3</button>
        </form>

        <script src="/script.js" />
      </div>
    </Layout>
  );
}

module.exports = Themes;
