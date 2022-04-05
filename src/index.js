const express = require("express");
const indexRoutes = require("./routes/index.routes.js");

const app = express();
const port = process.env.PORT || 4000;

app.use(indexRoutes);

app.listen(port, () => console.log("server listening on port", port));
