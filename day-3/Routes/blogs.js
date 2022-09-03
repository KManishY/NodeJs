const express = require("express");

let app = express.Router();

app.get("/", (req, res) => {
	res.sand("All Blog Posts");
});
app.get("/:id", (req, res) => {
	res.sand("Single Blog Post" + req.params.id);
});

module.exports = app;
