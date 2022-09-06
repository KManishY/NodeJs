const express = require("express");
const app = express();
const fs = require("fs");
const productsRouter = require("./Router/product.route.js");
app.use(express.json());
app.get("/", (req, res) => {
	const result = fs.readFileSync("./random.txt", "utf-8");
	// console.log("result: ", result);
	res.send(result);
});
app.use("/products", productsRouter);
app.listen(7500, () => {
	console.log("myserver at 7500");
});
