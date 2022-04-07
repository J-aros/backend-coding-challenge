const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
  {
    object: {
      type: String,
      default: "payment",
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    billed_hours: {
      type: Number,
      required: true,
    },
    billed_at: {
      type: String,
      required: true,
    },
    billing_currency: {
      type: String,
      required: true,
    },
    billed_amount: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: false,
    },
    needs_exchange: {
      type: Boolean,
      required: true,
    },
    echange_currency: {
      type: String,
      required: false,
    },
    exchange: {
      type: Object,
      required: false,
      original_amount: {
        type: Number,
      },
      currency: {
        type: String,
      },
      exchange_rate: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
