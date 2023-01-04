const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our website');
  }
  if (req.url === '/about') {
    res.end('Here is the result');
  }
  res.end(`<h1>Oops</h1>
    <p>we can't find your page you are looking for</p>
    <a href='/'>back home</a>`);
});

server.listen(3000);
