const fs = require("fs");
fs.readFile(process.argv[2], "utf-8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  if (data) {
    console.log(data.split("\n").length - 1);
  }
});
