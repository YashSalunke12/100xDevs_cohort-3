const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect(
      "mongodb+srv://salunkeyash:VFEzGCIdXfLlzlLA@cluster0.wkwc3kw.mongodb.net/week-7"
    )
    .then(() => console.log("connected to db"))
    .catch((err) => console.log("err", err));
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("users", userSchema);
const Todo = mongoose.model("todos", todoSchema);

module.exports = {
  connectDb,
  User,
  Todo,
};
