// const http = require("http");
// const fs = require("fs");

// const port = process.argv[2];
// const url = process.argv[3];

// const server = http.createServer(function (req, res) {
//   // request handling logic...
//   let src = fs.createReadStream(url);
//   src.pipe(res);
// });
// server.listen(port);

//参考答案
"use strict";
const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/plain" });

  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));
