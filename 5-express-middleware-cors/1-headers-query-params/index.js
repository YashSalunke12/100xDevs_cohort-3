const express = require('express');
const app = express();

app.get('/multiply', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        msg: a * b
    })
})
app.get('/add', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        msg: a + b
    })
})
app.get('/divide', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        msg: a / b
    })
})
app.get('/subtract', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        msg: a - b
    })
})

app.listen(3000);