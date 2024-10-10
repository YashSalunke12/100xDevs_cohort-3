const fs = require("fs");
const data = "heloworld";
fs.writeFile("a.txt", data, {}, (err) => {
  if (err) console.log(err);
  console.log("done");
});
