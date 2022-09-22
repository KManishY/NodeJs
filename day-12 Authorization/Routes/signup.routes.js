const express = require("express");
const { UserModel } = require("../Model/UserModel.js");
const signupController = express.Router();
const bcrypt = require("bcrypt");

signupController.post("/", async (req, res) => {
	const { email, password, age } = req.body;

	bcrypt
		.hash(password, 6)
		.then(async (hash) => {
			const user = new UserModel({ email: email, password: hash, age });
			await user.save();
			res.send(user);
			res.send("Succeesfully signupController");
		})
		.catch((error) => {
			res.send(error);
		});
});

module.exports = { signupController };
