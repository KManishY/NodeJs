const mongoose = require("mongoose");

async function main() {
	const conn = await mongoose.connect("mongodb://localhost:27017/project");

	const blog = new blog({
		author: "Manish Kumar",
		title: "learn mongoose",
	});
	await blog.save();
	console.log("completed");
	conn.disconnect();
}

main();
