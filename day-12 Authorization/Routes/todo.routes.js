const { Router } = require("express");
const { TodoModel } = require("../Model/TodoModel.js");

const todoController = Router();

todoController.get("/", async (req, res) => {
	const response = await TodoModel.find();
	res.send(response);
});
todoController.get("/:id", async (req, res) => {
	const response = await TodoModel.findOne({ id: req.params.id });
	res.send(response);
});

todoController.post("/addTodo", async (req, res) => {
	const payload = req.body;
	const new_todo = new TodoModel(payload);
	await new_todo.save();
	res.send("sucessfully added to Todos");
});
todoController.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const payload = req.body;
		const data = await TodoModel.updateOne({ id }, payload);
		console.log("data: ", data);
		res.send("sucessfully patch to Todos");
	} catch (error) {
		console.log("error: ", error);
		res.send(err);
	}
});
todoController.patch("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const payload = req.body;
		const data = await TodoModel.updateOne({ id }, payload);
		console.log("data: ", data);
		res.send("sucessfully patch to Todos");
	} catch (error) {
		console.log("error: ", error);
		res.send(err);
	}
});

todoController.delete("/delete/:id", async (req, res) => {
	const { id } = req.params;
	// console.log("id: ", id);
	const result = await TodoModel.remove({ id });
	// await result.save();
	res.send("deleted sucessfully");
});

module.exports = { todoController };
