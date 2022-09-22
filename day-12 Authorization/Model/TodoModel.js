const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
	task1: String, //
	task2: String, //
	id: Number,
});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = { TodoModel };
