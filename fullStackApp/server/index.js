const express = require("express");
const { connection } = require("./config/db.js");
const { userController } = require("./Routes/User.routes.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to Homepage!");
});

app.use("/user", userController);
// app.use("/notes", notesController);

const port = process.env.PORT || 8000;
app.listen(port, async (req, res) => {
	try {
		await connection;
		console.log("connection is established " + port);
	} catch (e) {
		console.log(e);
	}
});
