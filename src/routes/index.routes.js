const express = require("express");
const router = express.Router();

router.get("/payments", (req, res) => {
  res.send("Payments!");
});

module.exports = router;
