const { IAModel } = require("../MODALS/IAModal.js");

const { Router } = require("express");
const iaController = Router();

iaController.get("/", async (req, res) => {
	const result = await IAModel.find();
	res.send(result);
});

iaController.post("/addIA", async (req, res) => {
	const payload = req.body;
	// console.log("payload: ", payload);
	const new_ia = new IAModel(payload);
	await new_ia.save();
	res.send("Successfully added");
});

module.exports = { iaController };
