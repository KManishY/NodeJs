const express = require("express");
const productsRouter = express.Router();
const app = express();
app.use(express.json());

productsRouter.get("/", (req, res) => {
	res.send("welcome to productsRouter page");
});

productsRouter.post("/adddetails", (req, res) => {
	console.log(req.body);
	res.send("done");
});

module.exports = productsRouter;
