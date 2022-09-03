const express = require("express");

let app = express.Router();

app.get("/", (req, res) => {
	res.sand("Setting Page");
});
app.get("/Profile", (req, res) => {
	res.sand("Profile Page");
});

module.exports = app;
