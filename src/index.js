const parser = require('./parser');

const testArg = process.argv;
console.log(parser.parseArgs(testArg));
