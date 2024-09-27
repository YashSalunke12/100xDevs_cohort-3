const z = require("zod");

const userSignupSchema = z.object({
  firstName: z.string().max(20),
  lastName: z.string().max(20),
  email: z.string().email(),
  password: z.string().min(5),
});

const userSigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

const courseSchema = z.object({
  title: z.string(),
  description: z.string().max(50),
  price: z.number(),
  imageUrl: z.string(),
});

module.exports = {
  userSignupSchema,
  userSigninSchema,
  courseSchema,
};
