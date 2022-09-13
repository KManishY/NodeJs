const { Router } = require("express");
const { TopicModel } = require("../MODALS/TopicModel.js");
const topicController = Router();

topicController.get("/", async (req, res) => {
	const result = await TopicModel.find();
	res.send(result);
});

topicController.post("/addTopic", async (req, res) => {
	const payload = req.body;
	// console.log("payload: ", payload);
	const new_topic = new TopicModel(payload);
	await new_topic.save();
	res.send("Successfully added");
});

module.exports = { topicController };
