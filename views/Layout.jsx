const React = require('react');

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <title>Form example</title>
        <link rel="stylesheet" type="text/css" href="/style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
