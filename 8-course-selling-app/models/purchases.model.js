const { Schema, model } = require("mongoose");

const purchaseSchema = new Schema(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "courses",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const PurchaseModel = model("purchases", purchaseSchema);

module.exports = PurchaseModel;
