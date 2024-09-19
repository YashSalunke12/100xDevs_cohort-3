const fs = require('fs');


// synchronous
const fileContent = fs.readFileSync('a.txt', 'utf-8');
console.log(fileContent)

// asynchronous
fs.readFile('a.txt', 'utf-8', (err, data) => {
    console.log(data);
});