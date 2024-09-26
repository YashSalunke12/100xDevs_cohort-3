const { Router, application } = require("express");
const { userSignupSchema } = require("../utils/inputValidatiors");
const UserModel = require("../models/user.model");
const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const parsedPayload = userSignupSchema.safeParse({
    firstName,
    lastName,
    email,
    password,
  });
  if (!parsedPayload.success)
    return res.status(400).json({ msg: "Invalid Inputs" });

  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) return res.status(409).json({ msg: "User Already Exists" });

    const newUser = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
    });
    res
      .status(201)
      .json({ msg: "User Created Successfully", userId: newUser._id });
  } catch (err) {
    console.log({ err: err });
    return res.json({ msg: "something went wrong while signup" });
  }
});

userRouter.post("/signin", (req, res) => {});

userRouter.get("/courses", (req, res) => {});

userRouter.get("/purchasedCourses", (req, res) => {});

module.exports = userRouter;
