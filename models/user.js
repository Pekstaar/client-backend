const mongoose = require("mongoose");

const { objectId } = mongoose.Schema;
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    //   wishlist: [{ type: objectId, ref: "product" }],
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
