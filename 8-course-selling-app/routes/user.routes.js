const bcrypt = require("bcrypt");
const { Router } = require("express");
const {
  userSignupSchema,
  userSigninSchema,
} = require("../utils/inputValidatiors");
const UserModel = require("../models/user.model");
const generateToken = require("../utils/generateToken");
const CourseModel = require("../models/course.model");
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

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const parsedPayload = userSigninSchema.safeParse({ email, password });
  if (!parsedPayload.success)
    return res.status(400).json({ msg: "invalid credentials" });

  try {
    const userExists = await UserModel.findOne({ email });
    if (!userExists)
      return res.json({ msg: "User doesnt exists or incorrect email" });

    const validatePassword = await bcrypt.compare(
      password,
      userExists.password
    );
    if (!validatePassword) return res.json({ msg: "incorrect password" });

    const token = generateToken(userExists._id, process.env.JWT_USER_SECRET);
    res.status(200).json({ msg: "signin successfully ", token: token });
  } catch (err) {
    return res.json({ msg: "something went wrong while signin" });
  }
});

userRouter.get("/courses", async (req, res) => {
  const courses = await CourseModel.find({});
  res.json({ courses: courses });
});

userRouter.get("/purchasedCourses", (req, res) => {});

module.exports = userRouter;
