const express = require("express");
const { UserModel } = require("../Models/User.model.js");

const signupController = express.Router();

signupController.post("/", async (req, res) => {
	let { email, password, age } = req.body;
	let new_password = "";
	const ans = UserModel.find({ email });
	console.log("ans: ", ans);

	console.log(req.body);
	const user = new UserModel(req.body);
	await user.save();
	res.send(ans);
});

module.exports = {
	signupController,
};
