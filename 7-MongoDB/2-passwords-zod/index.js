const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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
  const zodSchema = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6),
  });
  const parsedPayload = zodSchema.safeParse({
    username,
    email,
    password,
  });
  if (!parsedPayload.success) return res.json({ msg: "invalid inputs" });
  try {
    const userExist = await User.findOne({ email });
    if (userExist)
      return res.json({ msg: "user with this email is already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };
    const user = await User.create(newUser);
    res.json({ msg: "user created successfully" });
  } catch (err) {
    console.log("err", err);
  }
});
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const zodSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
  });
  const parsedPayload = zodSchema.safeParse({ email, password });
  if (!parsedPayload.success) return res.json({ msg: "invalid creds" });
  try {
    const userExist = await User.findOne({ email });
    if (!userExist) return res.json({ msg: "user doesnt exists" });
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.json({ msg: "incorrect password" });
    const token = jwt.sign({ email }, JWT_SECRET);
    res.json({ msg: "logged in successfully", token: token });
  } catch (err) {
    console.log("err", err);
  }
});
app.post("/todo", auth, async (req, res) => {
  const { title, description } = req.body;
  const userEmail = req.user;
  console.log(userEmail);
  const zodSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
  });
  const parsedPayload = zodSchema.safeParse({ title, description });
  if (!parsedPayload.success) return res.json({ msg: "invalid creds" });
  try {
    const user = await User.findOne({ email: userEmail });
    console.log(user);
    const newTodo = {
      title,
      description,
      userId: user._id,
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
