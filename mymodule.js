// "use strict";
// const fs = require("fs");
// const path = require("path");
// let res = [];
// module.exports = function (folder, ext, callback) {
//   fs.readdir(folder, function (err, data) {
//     if (err) return callback(err);
//     data.forEach(function (file) {
//       if (path.extname(file) === "." + ext) {
//         console.log(file);
//         res.push(file);
//       }
//     });
//     callback(null, res);
//   });
// };

// 官方答案
"use strict";
const fs = require("fs");
const path = require("path");

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err);
    }

    list = list.filter(function (file) {
      return path.extname(file) === "." + filterStr;
    });

    callback(null, list);
  });
};
