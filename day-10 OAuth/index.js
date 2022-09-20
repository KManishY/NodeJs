const express = require("express");
const { connection } = require("mongoose");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
	res.send("welcome to Homepage");
});

app.listen(3000, async function (req, res) {
	try {
		await connection;
		console.log("Listening on port 3000 connection successfully");
	} catch (err) {
		console.log(err);
		console.log("Error in Connection");
	}
});
