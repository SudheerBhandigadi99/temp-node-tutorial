//This is a test module.

const sayHi = require('./5-Util');
sayHi('Susan');
const names = require('./4-names');
console.log(names);
console.log(sayHi(names.john));
const altName = require('./6-alternative-names');
console.log(altName);
console.log(sayHi(altName.David));
console.log(sayHi(altName.TwoPerson.name2));
require('./7-Add-Func');

