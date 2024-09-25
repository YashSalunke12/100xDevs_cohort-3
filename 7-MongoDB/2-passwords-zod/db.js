const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect("")
    .then(() => console.log("connected to db"))
    .catch((err) => console.log("err", err));
};

const userSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const todoSchema = new mongoose.Schema(
  {
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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);
const Todo = mongoose.model("todos", todoSchema);

module.exports = {
  connectDb,
  User,
  Todo,
};
