const express = require("express");
const { UserModel } = require("../Model/UserModel.js");
const loginController = express.Router();
const bcrypt = require("bcrypt");

loginController.post("/", async (req, res) => {
	let { email, password } = req.body;
	let user = await UserModel.find({ email });
	let hash = user.password;
	bcrypt.compare(password, hash, (err, result) => {
		if (result) {
			var token = jwt.sign({ email: email }, "secret");
			res.send(token);
		} else {
			res.send("Invalid password");
		}
	});
	const payload = req.body;
	console.log("payload: ", payload);
	const isValid = await UserModel.findOne(payload);
	if (isValid) {
	}
	res.send("Succeesfully login ");
});
module.exports = { loginController };
