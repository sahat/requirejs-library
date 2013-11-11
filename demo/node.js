var mylib = require('../dist/mylib');

console.log('Capitalize: ' + mylib.capitalize('steven'));
console.log('Slugify: ' + mylib.slugify('Call of Duty: Ghosts'));
console.log('Camelize:' + mylib.camelize('my little pony'));
console.log('Random Number: ' + mylib.random(0,100));
console.log('Library Version: ' + mylib.VERSION);