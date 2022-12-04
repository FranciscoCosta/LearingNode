// SYNC
const fs = require("fs");

const first = fs.readFileSync("./4.2/first.txt", "utf8");
const second = fs.readFileSync("./4.2/second.txt", "utf8");
console.log("====================================");
console.log(first);
console.log("====================================");
console.log("====================================");
console.log(second);
console.log("====================================");

fs.writeFileSync(
  "./4.2/4.3writetxt.txt",
  `Here it is: ${__dirname} / ${__filename}  `,
  { flag: "a" }
);

// ASYNC

const { readFile, writeFile } = require("fs");

// readFile("./4.2/third.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   const third = result;
//     writeFile(
//       "./4.2/fourth.txt",
//       `Here it is: ${__dirname} / ${__filename}  `,
//     );
// });
