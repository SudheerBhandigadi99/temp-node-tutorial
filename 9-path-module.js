const path = require('path');
// console.log(path.isAbsolute);
// console.log(path.sep);


const filePath = path.join('/Content/','Subfolder', 'Test.txt');
console.log('file path: ' + filePath);

var base  = path.basename(filePath);
console.log(base);

var absolute = path.resolve('Content', 'Subfolder', 'Test.txt');
console.log(absolute);