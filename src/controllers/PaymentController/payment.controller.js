const Payment = require("../../models/PaymentSchema/payment");
const calculationOfAmountToPay = require("../../lib/PaymentCalculation/amountCalculation");
const formatDate = require("../../lib/FormatDate/formatDate");

//Create payment
const createPayment = async (req, res) => {
  const newDate = formatDate(req.body.billed_at);
  if (req.body.needs_exchange) {
    const calculationOfAmount = await calculationOfAmountToPay(
      newDate,
      req.body.billed_amount
    );
    let { amountToPayCalculation, currency } = calculationOfAmount;
    req.body = {
      ...req.body,
      exchange: {
        original_amount: req.body.billed_amount,
        currency,
        exchange_rate: amountToPayCalculation,
      },
    };
  }
  const payment = new Payment(req.body);
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

//Get all payments
const getAllPayments = async (req, res) => {
  const page = req.query.page;
  if (page >= 2) {
    res.status(404).send({ message: "Pages must be less than 2" });
  }
  try {
    const result = await Payment.find().limit(100);
    if (result.length !== 0) {
      res.status(200).send(result);
    } else {
      res.send({ message: "No payments found" });
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

//Get one payment
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
  let body = { ...req.body };
  try {
    const result = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (result) {
      res.status(200).send({ message: "Payment sucessfully updated", result });
    } else {
      res.status(400).send({ message: "Bad request" });
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
    } else {
      res.status(400).send({ message: "Bad request" });
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPayment,
  updatePayment,
  deletePayment,
};
