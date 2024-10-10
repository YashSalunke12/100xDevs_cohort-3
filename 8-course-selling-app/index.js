require("dotenv").config();
const express = require("express");
const appRouter = require("./routes/index.routes");
const connectDb = require("./db/db");

connectDb();

const app = express();
app.use(express.json());
app.use("/api/v1", appRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
