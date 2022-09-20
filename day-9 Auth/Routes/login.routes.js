const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const { UserModel } = require("../Models/User.model.js");
const loginController = express.Router();

loginController.post("/", async (req, res) => {
	const isValid = await UserModel.findOne(req.body);
	console.log("isValid: ", isValid);

	if (isValid) {
		var token = jwt.sign({ foo: "bar" }, "secret");
		res.send({ msg: "Login Successful", token: token });
	} else {
		res.send("Not valid");
	}
});

module.exports = { loginController };
