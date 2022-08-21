// console.log("voila du code javascriptnode ");
const http = require("http");
const { env } = require("process");

const server = http.createServer((req, res) => {
  res.end("voila la reponse du serveur");
});

server.listen(process.env.PORT || 3000);
