const express = require("express");
const bcrypt = require("bcrypt");
const { connection } = require("./config/db.js");
const cors = require("cors");
const app = express();

app.use(cors());
// const { loginController } = require("./Routes/login.routes.js");
// const { signupController } = require("./Routes/signup.routes.js");
const { dashboardController } = require("./Routes/dashboard.routes.js");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./Models/User.model.js");
const { json } = require("express");

app.use(express.json());
app.get("/", function (req, res) {
	res.send("welcoome to homepage");
});
// app.use("/login", loginController);
// app.use("/signup", signupController);

app.post("/signup", async (req, res) => {
	// let a = JSON.parse(req.body);
	let { email, password, age } = req.body;
	const ans = await UserModel.findOne({ email: email });
	// console.log(req.body);
	if (ans) {
		res.send("user is already register");
	}
	bcrypt
		.hash(password, 6)
		.then(async (hash) => {
			const user = new UserModel({ email, password: hash, age });
			await user.save();
			res.send({ key: "successfully signed up" });
		})
		.catch((err) => {
			res.send({ name: err });
		});
});
app.post("/login", async (req, res) => {
	let { email, password } = req.body;
	let user = await UserModel.findOne({ email });
	console.log("user: ", user);
	let hash = user.password;
	console.log("hash: ", hash);
	bcrypt.compare(password, hash, (err, result) => {
		if (result) {
			// console.log('result: ', result);
			var token = jwt.sign({ email: email }, "secret");
			res.send({ msg: "Login successful", token: token });
		} else {
			res.send("Login failed");
		}
	});
});

app.use("/dashboard", dashboardController);
const port = process.env.PORT || 3000;
app.listen(port, async (req, res) => {
	try {
		await connection;
		console.log("Connection established on port " + port);
	} catch (err) {
		console.log("Connection failed");
		console.log(err);
	}
});

