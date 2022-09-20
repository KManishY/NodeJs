const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
const Validator = (req, res, next) => {
	const { id, title, content, author } = req.body;

	if (
		typeof id == "number" &&
		typeof content == "string" &&
		typeof author == "string" &&
		typeof title == "string"
	) {
		next();
	} else {
		res.status(400).send("hasFailed");
	}
};

const guard = (req, res, next) => {
	const { password } = req.query;
	console.log(password);
	if (+password == 54123) {
		next();
	} else {
		res.status(405).send("wrong pass");
	}
};

app.get("/posts", (req, res) => {
	const payload = fs.readFileSync("./posts.json", "utf-8");
	const parseData = JSON.parse(payload);
	res.send(parseData.posts);
});

app.post("/posts/create", Validator, (req, res) => {
	let payload = req.body;
	const data = fs.readFileSync("./posts.json", "UTF-8");
	const parseData = JSON.parse(data);
	const combiendData = [...parseData.posts, payload];
	parseData.posts = combiendData;
	fs.writeFileSync("./posts.json", JSON.stringify(parseData), "UTF-8");
	res.send("data added");
	res.send(parseData.posts);
});

app.delete("/posts/:postId", guard, (req, res) => {
	const id = +req.params.postId;
	const data = fs.readFileSync("./posts.json", "utf-8");
	const parseData = JSON.parse(data);
	const afterDeleteData = parseData.posts.filter((item) => item.id !== id);
	parseData.posts = afterDeleteData;
	fs.writeFileSync("./posts.json", JSON.stringify(parseData), "utf-8");
	res.send("delete");
	res.send(parseData.posts);
});

app.put("/post/:postId", guard, (req, res) => {
	const id = +req.params.postId;
	const payload = req.body;
	const data = fs.readFileSync("./posts.json", "utf-8");
	const parseData = JSON.parse(data);
	const newData = parseData.posts.map((item) =>
		item.id == id ? { ...payload } : item
	);
	parseData.posts = newData;
	fs.writeFileSync("./posts.json", JSON.stringify(parseData), "utf-8");
	res.send("put done");
});

app.listen(7000, () => {
	console.log(`Server is running on the port 7000`);
});
