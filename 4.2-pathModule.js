const path = require('path');

// gives path separator
console.log(path.sep)

const filePath = path.join('/4.2','subfolder','text.txt');
console.log(filePath)

const base=path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'4.2','subfolder','text.txt');
console.log(absolute);