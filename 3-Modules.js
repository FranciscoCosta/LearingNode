// Modules
// EVERY FILE in node is a module
//USES CommonJS
// Encapsulated Code (only share minimum code)
// const xico = "xico"
// const costa = "costa"

// const sayHi=(name)=>{
//     console.log(`Hello there ${name}`)
// }

const names = require('./3.1-FirstModule');
const sayHi = require('./3.2-SecondModule');
const data = require('./3.3-AlternativeExport');

console.log(data);
sayHi("Gi");
// sayHi(names.xico);
// sayHi(names.costa);

//Self invoc
require('./3.4-AutoInvoc');
