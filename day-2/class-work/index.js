const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
	if (req.method == "GET") {
		if (req.url === "/") {
			res.end("Welcome to home page!");
		} else if (req.url === "/about") {
			res.end("Welcome to about page!");
		} else if (req.url === "/details") {
			//   res.end("Welcome to details page");
			fs.readFile("./data.txt", "utf-8", (err, data) => {
				console.log(data);
				res.end(data);
			});
		}
	}
});

server.listen(8080);
