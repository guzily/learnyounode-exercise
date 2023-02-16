// const net = require("net");
// const strftime = require("strftime");
// const arg = process.argv[2];
// const server = net.createServer(function (socket) {
//   // socket handling logic
//   let date = new Date();
//   let data = strftime("%F %H:%M\n", date);
//   socket.write(data);
//   socket.end();
// });
// server.listen(arg);

//参考答案
"use strict";
const net = require("net");

function zeroFill(i) {
  return (i < 10 ? "0" : "") + i;
}

function now() {
  const d = new Date();
  return (
    d.getFullYear() +
    "-" +
    zeroFill(d.getMonth() + 1) +
    "-" +
    zeroFill(d.getDate()) +
    " " +
    zeroFill(d.getHours()) +
    ":" +
    zeroFill(d.getMinutes())
  );
}

const server = net.createServer(function (socket) {
  socket.end(now() + "\n");
});

server.listen(Number(process.argv[2]));
