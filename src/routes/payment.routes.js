const express = require("express");
const router = express.Router();
const {
  getPayments,
  createPayment,
  getPayment,
  updatePayment,
  deletePayment,
} = require("../controllers/payment.controller");

router.get("/", (req, res) => {
  res.send("Payments");
});
router.get("/payments", getPayments);
router.post("/payments", createPayment);
router.get("/payments/:id", getPayment);
router.put("/payments/:id", updatePayment);
router.delete("/payments/:id", deletePayment);

module.exports = router;
