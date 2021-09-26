const http = require('http');
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "peter",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({"a": 1}));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
