const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const JWT_SECRET = "230jkfjls-289";
const app = express();

app.use(express.json());
const users = [];

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.json({ msg: "please provide token" });

    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded.username) return res.json({ msg: "unauthorized" });
    req.user = decoded.username;
    next();
  } catch (err) {
    return res.json({ msg: "invalid token" });
  }
};

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});
app.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signin.html"));
});
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find((user) => user.username === username);
  if (user) return res.json({ msg: "user already exists" });
  const newUser = {
    username,
    password,
  };
  users.push(newUser);
  res.json({ msg: "user created successfully " });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username == username && user.password == password
  );
  if (!user)
    return res.json({ msg: "user doesnt exists or Invalid credentials" });

  const token = jwt.sign({ username }, JWT_SECRET);

  res.json({ msg: "signin successfull", token: token });
});

app.get("/me", auth, (req, res) => {
  const username = req.user;
  const user = users.find((user) => user.username == username);
  res.json({ username: user.username, password: user.password });
});

app.listen(3000);
