const express = require("express");
const { UserModel } = require("../Models/User.model.js");

const signupController = express.Router();

signupController.post("/", async (req, res) => {
	console.log(req.body);
	const user = new UserModel(req.body);
	await user.save();
	res.send("successfully signup");
});

module.exports = {
	signupController,
};
