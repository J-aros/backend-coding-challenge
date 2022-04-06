const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  object: {
    type: String,
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
  needs_exchange: {
    type: Boolean,
    required: true,
  },
  echange_currency: {
    type: String,
    required: paymentSchema.needs_exchange.required ? true : false,
  },
  exchange: {
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
});
