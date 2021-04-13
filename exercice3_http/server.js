const http = require("http");
//const fs = require('fs');
const hostname = "localhost"; // ou 127.0.0.1
const port = 5000;

const server = http.createServer((req, res) => {
 console.log(req.url);
 //let fileContent; 
 //fileContent = fs.readFileSync('./index.html', 'utf8');

 res.end("<h1>Welcome to my node server</h1>");     
});

server.listen(port, hostname, () => {
 console.log("SERVER STARTED");
});