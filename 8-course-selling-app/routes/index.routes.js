const { Ruoter, Router } = require("express");
const router = Router();
const userRouter = require("./user.routes");
const adminRouter = require("./admin.routes");
const courseRouter = require("./course.routes");

router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/course", courseRouter);

module.exports = router;
