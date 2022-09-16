const express = require("express");
const { connection } = require("./config/db.js");
const { loginController } = require("./Routes/login.routes.js");
const { signupController } = require("./Routes/signup.routes.js");
const { dashboardController } = require("./Routes/dashboard.routes.js");

const app = express();
app.use(express.json());
app.get("/", function (req, res) {
	res.send("welcoome to homepage");
});
app.use("/login", loginController);
app.use("/signup", signupController);
app.use("/dashboard", dashboardController);
app.listen(3000, async (req, res) => {
	try {
		await connection;
		console.log("Connection established");
	} catch (err) {
		console.log("Connection failed");
		console.log(err);
	}
});
