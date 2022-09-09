const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/web17");
// async function main() {
// 	//? connect to database
// 	const conn = await mongoose.connect("mongodb://localhost:27017/web17");
// 	const result = await MarkModal.find();
// 	console.log("result: ", result);

// 	//? insert Many in collection db

// 	// const obj1 = {
// 	// 	mark1: 120,
// 	// 	mark2: 234,
// 	// 	mark3: 12,
// 	// 	remark: "excellent",
// 	// };

// 	// const newMark = await MarkModal.insertMany([obj1]);
// 	// console.log("newMark: ", newMark);
// 	//? create a new document using save

// 	const obj = new MarkModal({
// 		mark1: 24,
// 		mark2: 34,
// 		mark3: 56,
// 		remark: "good enough",
// 	});
// 	const newMark = await obj.save();
// 	console.log("newMark: ", newMark);

// 	console.log("completed");
// 	conn.disconnect();
// }

// main();

const markSchema = mongoose.Schema(
	{
		mark1: Number,
		mark2: Number,
		mark3: Number,
		remark: { type: String, required: true },
	},
	{ versionKey: false, timestamps: true }
);

const MarkModal = mongoose.model(
	"mark", //? collection
	markSchema //? Schema
);

module.exports = { connection, MarkModal };
