const http = require("http");

const server = http.createServer((req, res) => {
 console.log(req.url);

 res.end("hello abdou");
});

server.listen(3000, 'localhost', () => {
 console.log("SERVER STARTED");
});
/*server.on('request', (req, res) => {

})*/