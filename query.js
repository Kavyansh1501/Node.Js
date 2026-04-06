const http = require('http');
const url = require('url');

http.createServer((req, res) => {

  const q = url.parse(req.url, true).query;
  res.write("Name: " + q.name);
  res.write("Age: " + q.age);
  res.write("Education: " + q.education);
  res.write("Height: " + q.height);
  res.end();
}).listen(5000);