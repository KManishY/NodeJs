const express = require("express");
const fs = require("fs");
const { parse } = require("path");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to HomePage");
});
//! read db.json and make api
app.get("/products", (req, res) => {
	const data = fs.readFileSync("./db.json", { encoding: "utf-8" });
	const parseData = JSON.parse(data);
	const products = parseData.products;
	res.send(products);
});
app.get("/products/:created", (req, res) => {
	res.send("created");
});
//! post data to db.json
//?

app.post("/products/created", (req, res) => {
	const payload = JSON.stringify(req.body);
	const data = fs.readFileSync("./db.json", { encoding: "utf-8" });
	parseData = JSON.parse(data);
	const Products = parseData.products;
	const newData = [...Products, JSON.parse(payload)];
	parseData.products = newData;
	fs.writeFileSync("./db.json", JSON.stringify(parseData), "utf-8");
	res.send("created");
});

app.delete("/products/created", (req, res) => {
	const payload = JSON.stringify(req.body);
	const { id } = JSON.parse(payload);
	const data = fs.readFileSync("./db.json", "utf-8");
	const parseData = JSON.parse(data);
	const newData = parseData.products.filter((item) => item.id !== id);

	parseData.products = newData;
	fs.writeFileSync("./db.json", JSON.stringify(parseData), "utf-8");
	res.send("DELETE Request Called");
});

app.put("/products/created", (req, res) => {
	const payload = JSON.stringify(req.body);
	const newPayload = JSON.parse(payload);
	const id = newPayload.id;
	const data = fs.readFileSync("./db.json", "utf-8");
	const parseData = JSON.parse(data);
	const newData = parseData.products.map((item) =>
		item.id === id ? { ...newPayload } : item
	);
	parseData.products = newData;
	console.log("parseData: ", parseData);

	fs.writeFileSync("./db.json", JSON.stringify(parseData), "utf-8");

	res.send("full id is changed");
});

app.listen(7070, (req, res) => {
	console.log(`Listen to Port `);
});
