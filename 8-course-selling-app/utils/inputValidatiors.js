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

module.exports = {
  userSignupSchema,
  userSigninSchema,
};
