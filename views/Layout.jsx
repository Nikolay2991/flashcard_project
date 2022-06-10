const React = require('react');
 
function Layout({ title ,children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <title>Form example</title>
        {/* <link rel="stylesheet" type="text/css" href="/style.css" /> */}
        <script defer src="js/registrate.js" />
      </head>
      <body title={title}>
        {children}
        {/* <script defer src="../public/js/registrate.js" /> */}
      </body>
    </html>
  );
}

module.exports = Layout;
