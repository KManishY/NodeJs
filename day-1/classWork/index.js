//node js - basics 
const {sum,multi,arr} = require("./other.js")
console.log('arr: ', arr);

console.log('multi(2,3): ', multi(2,3));
console.log('sum(2,3): ', sum(2, 3));


// node v8 - utilities
// node modules = pieces of code to do something

//

const os = require('os')
console.log(os.uptime())

const fs = require('fs')
// console.log('fs: ', fs);

console.log(fs.readFile("./a.txt",{encoding:"utf8"},(err, data) => {console.log(data)}))