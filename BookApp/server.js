const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
let storeRoute = require("./route/store.route");
let bookRoute = require("./route/book.route");

let app = new express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/v2", storeRoute);
app.use("/api/v2", bookRoute);
app.get("/", (req, res) => {
  res.send("server started successfully");
});

app.listen(3000, () => {
  console.log("server start .........");
});
