const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db.js");
const { authentication } = require("./middleware/authentication.js");
const { noteController } = require("./Routes/Note.routes.js");
const { userController } = require("./Routes/User.routes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to Homepage!");
});

app.use("/user", userController);
app.use(authentication);
app.use("/notes", noteController);

const port = process.env.PORT || 8080;
app.listen(port, async (req, res) => {
	try {
		await connection;
		console.log("connection is established " + port);
	} catch (e) {
		console.log(e);
	}
});
