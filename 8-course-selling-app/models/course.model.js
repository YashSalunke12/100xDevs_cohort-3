const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      ref: "admins",
    },
  },
  { timestamps: true }
);

const CourseModel = model("courses", courseSchema);

module.exports = CourseModel;
