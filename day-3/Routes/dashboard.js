const express = require("express");

let app = express.Router();

app.get("/", (req, res) => {
	res.sand("Dashboard Page");
});

module.exports = app;
