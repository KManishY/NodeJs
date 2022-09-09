const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
	res.send("helloooooooooooo");
});
app.get("/messages", (req, res) => {
	res.send(`
	<ul>
		<li>Manish</li>
		<li>Rabi</li>
		<li>Rovin</li>
		<li>Vivek</li>
	</ul>
	`);
});
app.post("/messages", function (req, res) {
	console.log("updateing messages....");
	res.send("helloooooooooooo");
});

app.listen(PORT, () => {
	console.log(`Listing on ${PORT}`);
});
