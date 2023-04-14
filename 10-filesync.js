// const {readFileSync, writeFileSync} = require('fs');

// var first = readFileSync('./Content/first.txt', 'utf8');
// var second = readFileSync('./Content/second.txt', 'utf8');

// console.log(first);
// console.log(second);

// var path = require('path');
// console.log(path.sep);

// var absolutePath = path.resolve('Content', 'Subfolder', 'Test.tx')
// console.log(absolutePath);

var {readFileSync, writeFileSync} = require('fs');

var first = readFileSync('./Content/first.txt', 'utf8');
var second = readFileSync('./Content/second.txt', 'utf8');

// console.log(first);
// console.log(second);

var path = require('path');
var absolutePath = path.resolve('Content', 'Subfolder', 'Test.txt');

// console.log(absolutePath);

// var third = readFileSync(absolutePath, 'utf8');
// console.log(third);


writeFileSync('./Content/result-sync.txt',
 'Here is the result: ' + first + ' ' + second, {flag:'a'});

var  resDefault = readFileSync('./Content/result-sync.txt', 'utf8');
console.log(resDefault);