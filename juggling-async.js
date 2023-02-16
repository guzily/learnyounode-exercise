// const http = require("http");
// const bl = require("bl");

// let arg1 = process.argv[2];
// let arg2 = process.argv[3];
// let arg3 = process.argv[4];

// http.get(arg1, function (res) {
//   res.setEncoding("utf-8");
//   res.pipe(
//     bl(function (err, data) {
//       if (err) {
//         return console.error(err);
//       }
//       data = data.toString();
//       console.log(data);
//     })
//   );
//   http.get(arg2, function (res) {
//     res.setEncoding("utf-8");
//     res.pipe(
//       bl(function (err, data) {
//         if (err) {
//           return console.error(err);
//         }
//         data = data.toString();
//         console.log(data);
//       })
//     );
//     http.get(arg3, function (res) {
//       res.setEncoding("utf-8");
//       res.pipe(
//         bl(function (err, data) {
//           if (err) {
//             return console.error(err);
//           }
//           data = data.toString();
//           console.log(data);
//         })
//       );
//     });
//   });
// });

// 参考答案
"use strict";
const http = require("http");
const bl = require("bl");
const results = [];
let count = 0;

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(
      bl(function (err, data) {
        if (err) {
          return console.error(err);
        }

        results[index] = data.toString();
        count++;

        if (count === 3) {
          printResults();
        }
      })
    );
  });
}

for (let i = 0; i < 3; i++) {
  httpGet(i);
}
