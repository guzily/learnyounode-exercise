// const fs = require("fs");
// let path = require("path");

// fs.readdir(process.argv[2], function (err, list) {
//   if (err) {
//     return console.log(err);
//   }
//   let res = list.filter((item) => path.extname(item) === "." + process.argv[3]);
//   res.forEach((item) => console.log(item));
// });

//官方答案
"use strict";
const fs = require("fs");
const path = require("path");

const folder = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err);
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
