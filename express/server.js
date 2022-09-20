const express = require("express");
const app = express();

app.use(loggingMiddleware);

app.get("/", (req, res) => {
	res.send("Home Page");
});

app.get("/users", authUserAccess, (req, res) => {
	res.send("Users Page");
});

function loggingMiddleware(req, res, next) {
	console.log("Inside Middleware");

	next();
}

function authUserAccess(req, res, next) {
	if (req.query.admin == "true") {
		next();
	} else {
		res.send("ERROR: You must be admin to access this");
	}
}

app.listen(8080, () => console.log("Server Started"));



