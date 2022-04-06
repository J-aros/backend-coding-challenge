const Payment = require("../models/payment");

//Create payment
const createPayment = async (req, res) => {
  const body = {
    description: req.body.description,
    billed_hours: req.body.billed_hours,
    billed_at: req.body.billed_at,
    billing_currency: req.body.billing_currency,
    billed_amount: req.body.billed_amount,
    needs_exchange: req.body.needs_exchange,
    exchange_currency: req.body.exchange_currency,
  };
  // if (body.needs_exchange === true) {
  //
  // }
  const payment = new Payment(body);

  try {
    const result = await payment.save();
    if (result) {
      res.status(201).send({ message: "Payment created", result });
    } else {
      res.status(400).send({ message: "Bad request" });
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

//Get all
const getPayments = async (req, res) => {
  try {
    const result = await Payment.find().limit(100);
    if (result.length !== 0) {
      res.status(200).send(result);
    } else {
      res.send({ message: "No payments found" });
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

//Get one
const getPayment = async (req, res) => {
  try {
    const result = await Payment.findById(req.params.id);
    if (result) {
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(404).send({ message: "ID Not Found", err });
  }
};

//Update payment
const updatePayment = async (req, res) => {
  try {
    const result = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (result) {
      res.status(200).send({ message: "Payment sucessfully updated", result });
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

//Delete payment
const deletePayment = async (req, res) => {
  try {
    const result = await Payment.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).send({ message: "Payment sucessfully deleted", result });
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  createPayment,
  getPayments,
  getPayment,
  updatePayment,
  deletePayment,
};
