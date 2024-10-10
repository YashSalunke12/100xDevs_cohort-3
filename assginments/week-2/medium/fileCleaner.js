const fs = require("fs");

const cleanFile = (filePath) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    const content = data.replace(/\s+/g, " ").trim();

    fs.writeFile(filePath, content, {}, (err) => {
      if (err) console.log(err);
      console.log("file cleaned successfully");
    });
  });
};

cleanFile("data.txt");
