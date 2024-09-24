const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const JWT_SECRET = "lsjfd233999jj";

app.use(express.json());

const users = [];

// const generateToken = () => {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     let token = "";
//     for(let i=0; i<64; i++) {
//         let num = Math.floor(Math.random() * 64);
//         token = token + options[num];
//     }
//     return token;
// }

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.json({ msg: "unauthorized" });
    }
  });
  const username = decoded.username;
  const user = users.find((user) => user.username == username);
  if (!user) return res.json({ msg: "unauthorized" });
  req.username = username;
  next();
};

app.post("/signup", (req, res) => {
  console.log("req");
  const username = req.body.username;
  const password = req.body.password;

  const user = {
    username,
    password,
  };
  users.push(user);
  console.log(users);

  res.json({
    msg: "user created successfully",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find((user) => user.username == username);
  if (!user) return res.json({ msg: "user does not exists" });
  const token = jwt.sign({ username: user.username }, JWT_SECRET);
  res.json({ msg: "logged in successfully", token: token });
});

app.get("/me", auth, (req, res) => {
  res.json({ username: req.username });
});

app.listen(3000);
