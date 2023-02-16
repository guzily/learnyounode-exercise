// github讨论区答案
// var http = require("http");
// var url = require("url");

// function parsetime(time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds(),
//   };
// }

// function unixtime(time) {
//   return { unixtime: time.getTime() };
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true);
//   var time = new Date(parsedUrl.query.iso);
//   var result;

//   if (/^\/api\/parsetime/.test(req.url)) result = parsetime(time);
//   else if (/^\/api\/unixtime/.test(req.url)) result = unixtime(time);

//   if (result) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(result));
//   } else {
//     res.writeHead(404);
//     res.end();
//   }
// });
// server.listen(Number(process.argv[2]));

//官方答案
"use strict";
const http = require("http");

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

function unixtime(time) {
  return { unixtime: time.getTime() };
}

const server = http.createServer(function (req, res) {
  const parsedUrl = new URL(req.url, "http://example.com");
  const time = new Date(parsedUrl.searchParams.get("iso"));
  let result;

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time);
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time);
  }

  if (result) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(Number(process.argv[2]));

//我的答案（查答案改成功了）
// const http = require("http");
// const port = process.argv[2];

// const server = http.createServer(function (req, res) {
//   const myURL = new URL(req.url, "http://example.com");
//   if (/^\/api\/parsetime/.test(req.url)) {
//     let iso = myURL.searchParams.get("iso");
//     let date = new Date(iso);
//     let time = {
//       hour: date.getHours(),
//       minute: date.getMinutes(),
//       second: date.getSeconds(),
//     };
//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify(time));
//   }
//   if (/^\/api\/unixtime/.test(req.url)) {
//     let iso = myURL.searchParams.get("iso");
//     let date = new Date(iso);
//     let time = {
//       unixtime: date.getTime(),
//     };
//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify(time));
//   }
// });

// server.listen(port);
