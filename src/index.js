const express = require("express");
const paymentRoutes = require("./routes/PaymentRoutes/payment.routes");
const connectDB = require("./lib/Database/database");

const app = express();
const port = process.env.PORT || 8080;

//mongodb connection
connectDB();

//middleware
app.use(express.json());

app.use("/", paymentRoutes);

app.listen(port, () => console.log("server listening on port", port));
