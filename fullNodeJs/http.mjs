import { request } from "./request.mjs";
import { response } from "./response.mjs";
// const request = require("./request.mjs");
// const response = require("./response.mjs");
function makeRequest(url, data) {
	request.send(url, data);
	return response.read();
}

const responseData = makeRequest("http://www.google.com", "hello world");
console.log("responseData: ", responseData);
