const express = require("express");
var jwt = require("jsonwebtoken");
const dashboardController = express.Router();

dashboardController.get("/", async (req, res) => {
	const token = req.headers.authorization.split(" ")[0];
	jwt.verify(token, "shhhhh", function (err, decoded) {
		try {
			console.log("decoded: ", decoded.foo);
			res.send("some important information");
		} catch (err) {
			console.log(err);
		}
	});
});

module.exports = { dashboardController };
