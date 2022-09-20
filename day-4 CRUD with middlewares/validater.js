const validator = (req, res, next) => {
	const { id, title, content, author } = req.body;

	if (
		id &&
		typeof id == "number" &&
		content &&
		typeof content == "string" &&
		author &&
		typeof author == "string" &&
		title &&
		typeof title == "string"
	) {
		next();
	} else {
		res.status(400).send("Validation Failed");
	}
};
