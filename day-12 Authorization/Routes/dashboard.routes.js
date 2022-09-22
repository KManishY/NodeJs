const express = require("express");
var jwt = require("jsonwebtoken");
const { authentication } = require("../Middleware/authentication.js");
const { Router } = express();
const dashboardController = express.Router();
dashboardController.get("/", authentication, async (req, res) => {
	res.send("welcome to dashoard");
});
module.exports = { dashboardController };
