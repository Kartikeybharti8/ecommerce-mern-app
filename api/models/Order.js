const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        _id: {type: String, required: true },
        title: { type: String, required: true, unique: true },
        img: { type: String, required: true },
        price: { type: Number, required: true },
        inStock: { type: Boolean, default: true },
        desc: { type: String, required: true },
        quantity: {type: Number,default: 1},
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Order", OrderSchema);
