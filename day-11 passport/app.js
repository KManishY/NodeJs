const express = require("express");

const app = express();
//?set view engine
app.set("views", "ejs");
app.use(express.json());

//create home route
app.get("/", function (req, res) {
	// res.send("Hello homepage");
	res.render("Hello homepage");
});
app.listen(3000, () => {
	console.log("done listening");
});
