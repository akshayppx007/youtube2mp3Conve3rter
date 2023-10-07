const express = require("express");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middlewares/error");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const mp3 = require("./routes/mp3ConverterRoutes");

app.use("/api/v1", mp3);

app.use(errorMiddleware);

module.exports = app;
