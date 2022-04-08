const express = require("express");
const paymentRoutes = require("./routes/PaymentRoutes/payment.routes");
const connectDB = require("./lib/Database/database");
const rateLimit = require("express-rate-limit");

const app = express();
const port = process.env.PORT || 8080;

//Limit 10 requests
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  handler: function (req, res) {
    return res.status(429).json({
      error: "To many requests, please try again in a minute",
    });
  },
});

app.use(limiter);

//mongodb connection
connectDB();

//middleware
app.use(express.json());

app.use("/", paymentRoutes);

app.listen(port, () => console.log("server listening on port", port));
