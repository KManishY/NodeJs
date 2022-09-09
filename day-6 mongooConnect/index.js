const express = require("express");

const { connection, MarkModal } = require("./db.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("homepage");
});

app.get("/marks", async (req, res) => {
	const results = await MarkModal.find();
	res.send(results);
});
app.post("/addmarks", async (req, res) => {
	const { mark1, mark2, mark3, remark } = req.body;
	const newMark = new MarkModal({
		mark1: mark1,
		mark2: mark2,
		mark3: mark3,
		remark: remark,
	});
	await newMark.save();
	res.send("Your data has been saved successfully");
});

app.listen(8080, async () => {
	try {
		await connection;
		console.log("listing to port 8080 && connect to db");
	} catch (err) {
		console.log("err");
	}
});

// connect to db using api
