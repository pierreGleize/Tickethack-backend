var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./model/connection");
var indexRouter = require("./routes/index");
const cartRouter = require("./routes/users");

var app = express();
const cors = require("cors");
const { mongo, default: mongoose } = require("mongoose");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/carts", cartRouter);
module.exports = app;
