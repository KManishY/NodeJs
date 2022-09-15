const express = require("express");
const { connection } = require("./config/db.js");
const { UserModel } = require("./Models/User.model.js");
var jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

// var token = jwt.sign({ foo: "bar" }, "shhhhh");

app.get("/", function (req, res) {
	res.send("welcoome to homepage");
});

app.post("/signup", async (req, res) => {
	console.log(req.body);
	const user = new UserModel(req.body);
	await user.save();
	res.send("successfully signup");
});

app.post("/login", async (req, res) => {
	const isValid = await UserModel.findOne(req.body);
	console.log("isValid: ", isValid);

	if (isValid) {
		var token = jwt.sign({ foo: "bar" }, "shhhhh");
		res.send({ msg: "Login Successful", token: token });
	} else {
		res.send("Not valid");
	}
});
// ?token=1234

app.get("/dashboard", async (req, res) => {
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

app.listen(3000, async (req, res) => {
	try {
		await connection;
		console.log("Connection established");
	} catch (err) {
		console.log("Connection failed");
		console.log(err);
	}
});
