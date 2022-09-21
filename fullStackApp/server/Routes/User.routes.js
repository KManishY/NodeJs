const { Router } = require("express");

const userController = router();

userController.post("/signup", (req, res) => {
	res.send("SignUp");
});
userController.post("/login", (req, res) => {
	res.send("SignUp");
});

module.exports = { userController };
