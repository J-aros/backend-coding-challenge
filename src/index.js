const express = require("express");
const paymentRoutes = require("./routes/payment.routes.js");
const connectDB = require("./database");

const app = express();
const port = process.env.PORT || 8080;

//mongodb connection
connectDB();

app.use(paymentRoutes);

app.listen(port, () => console.log("server listening on port", port));
