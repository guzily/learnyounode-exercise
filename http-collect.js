// const bl = require("bl");
// const http = require("http");

// http
//   .get(process.argv[2], function (response) {
//     response.setEncoding("utf8");
//     response.pipe(
//       bl(function (err, data) {
//         console.log(data.length);
//         console.log(data.toString());
//       })
//     );
//   })
//   .on("error", console.error);

//官方答案
"use strict";
const http = require("http");
const bl = require("bl");

http.get(process.argv[2], function (response) {
  response.pipe(
    bl(function (err, data) {
      if (err) {
        return console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
