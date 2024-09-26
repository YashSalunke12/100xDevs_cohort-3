const { connect } = require("mongoose");

const connectDb = async () => {
  await connect(process.env.MONGO_URI)
    .then((response) => console.log(`connected to database`))
    .catch((err) => console.log("failed connecting to database"));
};

module.exports = connectDb;
