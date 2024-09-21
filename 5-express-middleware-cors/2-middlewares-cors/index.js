const express = require('express');
const app = express();

let reqCount = 0;
const requestIncreaser = (req, res, next) => {
    reqCount++;
    req.name = "Yash";
    console.log(reqCount);
    next(); 
}

const loggerMiddleware = (req, res, next) => {
    console.log("method is " + req.method);
    console.log("hsot is " + req.hostname);
    console.log("route is " + req.url);
    console.log(new Date().toLocaleTimeString());
    next();
}

app.use(loggerMiddleware);

app.get('/sum', requestIncreaser, (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    console.log(req.name)
    res.json({
        msg: a + b
    })
})

app.listen(3000);