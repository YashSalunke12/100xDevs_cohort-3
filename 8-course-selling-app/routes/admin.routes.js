const { Router } = require("express");
const AdminModel = require("../models/admin.model");
const bcrypt = require("bcrypt");
const {
  userSigninSchema,
  userSignupSchema,
  courseSchema,
} = require("../utils/inputValidatiors");
const generateToken = require("../utils/generateToken");
const auth = require("../middlewares/auth.middleware");
const CourseModel = require("../models/course.model");
const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
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
    const userExists = await AdminModel.findOne({ email });
    if (userExists)
      return res.status(409).json({ msg: "Admin Already Exists" });

    const newUser = await AdminModel.create({
      firstName,
      lastName,
      email,
      password,
    });
    res
      .status(201)
      .json({ msg: "Admin Created Successfully", userId: newUser._id });
  } catch (err) {
    console.log({ err: err });
    return res.json({ msg: "something went wrong while signup" });
  }
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const parsedPayload = userSigninSchema.safeParse({ email, password });
  if (!parsedPayload.success)
    return res.status(400).json({ msg: "invalid credentials" });

  try {
    const userExists = await AdminModel.findOne({ email });
    if (!userExists)
      return res.json({ msg: "Admin doesnt exists or incorrect email" });

    const validatePassword = await bcrypt.compare(
      password,
      userExists.password
    );
    console.log(validatePassword);
    if (!validatePassword) return res.json({ msg: "incorrect password" });

    const token = generateToken(userExists._id, process.env.JWT_ADMIN_SECRET);
    res.status(200).json({ msg: "signin successfully ", token: token });
  } catch (err) {
    console.log("err", err);
    return res.json({ msg: "something went wrong while signin" });
  }
});

adminRouter.post(
  "/course",
  auth(process.env.JWT_ADMIN_SECRET),
  async (req, res) => {
    const adminId = req.id;
    const { title, description, price, imageUrl } = req.body;
    const parsedPayload = courseSchema.safeParse({
      title,
      description,
      price,
      imageUrl,
    });
    if (!parsedPayload.success) return res.json({ msg: "invalid inputs" });
    try {
      const newCourse = await CourseModel.create({
        title,
        description,
        price,
        imageUrl,
        creatorId: adminId,
      });
      const admin = res.json({
        msg: "course created successfully",
        courseId: newCourse._id,
      });
    } catch (err) {
      console.log("err while creating a course", err);
      res.json({ msg: "error while creating a coure " });
    }
  }
);

adminRouter.put("/course", auth(process.env.JWT_ADMIN_SECRET), (req, res) => {
  const userId = req.id;
  const { username, password } = req.body;
});

adminRouter.get(
  "/courses",
  auth(process.env.JWT_ADMIN_SECRET),
  (req, res) => {}
);

module.exports = adminRouter;
