// const mymodule = require("./mymodule.js");
// const folder = process.argv[2];
// const ext = process.argv[3];
// mymodule(folder, ext, () => {});

//官方答案
"use strict";
const filterFn = require("./solution_filter.js");
const dir = process.argv[2];
const filterStr = process.argv[3];

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error("There was an error:", err);
  }

  list.forEach(function (file) {
    console.log(file);
  });
});
