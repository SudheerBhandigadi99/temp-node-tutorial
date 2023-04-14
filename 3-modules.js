//MODULE
// Importing the module by required keyword.

const names = require('./4-names')
console.log(names);
const sayHi = require('./5-Util');
const altName  = require('./6-alternative-names');
console.log(altName);

require('./7-Add-Func');

sayHi(altName.David);
// sayHi(altName.Joseph);
// sayHi(altName.TwoPerson.name1);
sayHi(altName.TwoPerson.name2);

sayHi('Sussan');
// sayHi(names.john);
// sayHi(names.peter);
// sayHi(names.miller);