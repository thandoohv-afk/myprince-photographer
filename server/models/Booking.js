const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },

    date: {
      type: String,
    },

    package: {
      type: String,
    },

    message: {
      type: String,
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);