const express = require("express");
const router = express.Router();
const {
  getAllPayments,
  createPayment,
  getPayment,
  updatePayment,
  deletePayment,
} = require("../../controllers/PaymentController/payment.controller");

router.get("/", (req, res) => {
  res.send("Payments");
});
router.get("/payments", getAllPayments);
router.post("/payments", createPayment);
router.get("/payments/:id", getPayment);
router.put("/payments/:id", updatePayment);
router.delete("/payments/:id", deletePayment);

module.exports = router;
