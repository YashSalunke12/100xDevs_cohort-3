const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (err) {
    return res.json({ msg: "error while hashing password" });
  }
});

const UserModel = model("users", userSchema);

module.exports = UserModel;
