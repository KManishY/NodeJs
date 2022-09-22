const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = async (req, res, next) => {
	if (!req.headers.authorization) {
		return res.send("Please Login Again");
	}
	const token = req.headers.authorization.split(" ")[1];
	await jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
		if (err) {
			res.send("Please Login");
		} else {
			req.body.userEmail = decoded.userId;
			next();
		}
	});
};

module.exports = { authentication };
