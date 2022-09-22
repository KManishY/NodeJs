var jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.send("please login again");
	}
	const token = req.headers?.authorization;
	jwt.verify(token, "secret", function (err, decoded) {
		if (err) {
			res.send("please login");
		} else {
			req.body.email = decoded.email;
			next();
		}
	});
};

module.exports = { authentication };
