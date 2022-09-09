// Create an argument based calculator in nodejs
// the code takes arguments from terminal and then depending on arguments gives output
// eg node index.js add 1 2 will return 3
// support following operations:
// add, sub, mult, divide, sin, cos, tan, random
// eg node index.js random will just generate random number for you
// use crypto module to generate random number. you can also decide to get length from args
//! calculator
// const fs = require("fs");

// const readline = require("readline").createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// readline.question(`What's your name?`, (input) => {
// 	input = input.trim().split(" ");
// 	console.log("input: ", input);

// 	readline.close();
// });

//! create read edit delete
// Create a file server in nodejs using http
// when user visits site, he should see the list of all files and folders in current directory
// user should be able to ask for different directory content by routes
// eg:
// / shows directories: data, src, public etc
// /public will show content of public directory
// /public/other will show content of other directory inside public and so on
// listing should appear on URL change you can enter URL manuall
// PART 2:

// make the listing with proper UI and Icons and anchor tags
// hints: / serves an html response. you will have to manipulate li tags as strings yourself
// when user clicks on li tag, take them on proper URL /public etc.
// in backend handle /public route dynamically it cannot be hardcoded.
// hint: you can change request structure like /api/public will ask for contents of public directory etc. just to know which request is for data and which request is for frontend etc

//!CRUD operations

// const fs = require("fs");

// fs.mkdirSync("Data"); //?createing a new folder

//? create file inside your folder
// fs.writeFileSync("data/demo.txt", "My Name is Manish kumar");

//? append data in your existing file

// fs.appendFileSync("data/demo.txt", " Learning nodejs ");

//? read data from text file
// const data = fs.readFileSync("newdata/newdemo.txt", { encoding: "utf-8" });
// console.log(data);

//? rename the folder name

// fs.renameSync("data", "newdata");

//? rename the file name

// fs.renameSync("newdata/demo.txt", "newdata/newdemoFile.txt");

//? remove file and folder using unlinkSync

// fs.unlinkSync("newdata/newdemoFile.txt");


// import readline module
const readline = require("readline");
const crypto = require("node:crypto");
// create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// question user to enter name
rl.question("Write your question ?  \n", function (string) {
    input = string;
    let arr = input.trim().split(" ");
    let op = arr[0];
    let values = [];
    for (let i = 1; i < arr.length; i++) {
        values.push(Number(arr[i]));
    }
    let ans = calculator(op, values);
    console.log("Your Answers is : ", ans);
    rl.close();
});

function calculator(op, data) {
    if (op === "add") {
        return data.reduce((p, c) => p + c, 0);
    } else if (op === "sub") {
        return data[1] - data[0];
    } else if (op === "mult") {
        return data.reduce((p, c) => p * c, 1);
    } else if (op === "divide") {
        return data[1] / data[0];
    } else if (op === "sin") {
        return Math.sin(data[0]);
    } else if (op === "cos") {
        return Math.cos(data[0]);
    } else if (op === "tan") {
        return Math.tan(data[0]);
    } else if (op === "random") {
        const n = crypto.randomInt(6);
        return n;
    }
}
