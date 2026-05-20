const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HMCTS Task API Running Successfully!");
});

module.exports = app;
