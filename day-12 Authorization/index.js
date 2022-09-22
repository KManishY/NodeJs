const express = require("express");
const { connection } = require("./config/db.js");
const { signupController } = require("./Routes/signup.routes.js");
const { dashboardController } = require("./Routes/dashboard.routes.js");
const { loginController } = require("./Routes/login.routes.js");
const { todoController } = require("./Routes/todo.routes.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to Homepage!");
});

app.use("/login", loginController);
app.use("/signup", signupController);
app.use("/todo", todoController);
app.use("/dashboard", dashboardController);

const port = process.env.PORT || 3000;

app.listen(port, async (req, res) => {
	try {
		await connection;
		console.log("connection is established " + port);
	} catch (e) {
		console.log(e);
	}
});
