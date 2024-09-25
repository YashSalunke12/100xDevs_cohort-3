const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "lsjf23ij";
const { connectDb, User, Todo } = require("./db");
const app = express();

connectDb();
app.use(express.json());

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded.email);

    if (!decoded.email) res.json({ msg: "invalid toknen" });
    req.user = decoded.email;
    next();
  } catch (err) {
    res.json({ msg: "invalid token" });
  }
};

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist)
      return res.json({ msg: "user with this email is already exists" });
    const newUser = {
      username,
      email,
      password,
    };
    const user = await User.create(newUser);
    res.json({ msg: "user created successfully" });
  } catch (err) {
    console.log("err", err);
  }
});
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (!userExist) return res.json({ msg: "user doesnt exists" });
    const token = jwt.sign({ email }, JWT_SECRET);
    res.json({ msg: "logged in successfully", token: token });
  } catch (err) {
    console.log("err", err);
  }
});
app.post("/todo", auth, async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = {
      title,
      description,
    };
    await Todo.create(newTodo);
    res.json({ msg: "todo created successfully" });
  } catch (err) {
    console.log("err", err);
  }
});
app.get("/todos", auth, async (req, res) => {
  const todos = await Todo.find({});
  res.json({ todos: todos });
});

app.listen(3000);
