require("dotenv").config();
const express = require("express");
const { connection } = require("./Config/db.js");
const { topicController } = require("./Routes/topic.routes.js");
const { iaController } = require("./Routes/ia.routes.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("welcome");
});

app.use("/topics", topicController);
app.use("/ia", iaController);

app.listen(7500, async () => {
	try {
		await connection;
		console.log("connection established");
	} catch (err) {
		console.log("failed to connect");
		console.log(err);
	}
	console.log("listing on port 7500...");
});
