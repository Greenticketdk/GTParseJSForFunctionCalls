#!/usr/bin/env node
var GTParseJSForFunctionCalls = require('./');

if (process.argv.length < 3) {
    console.error('You should provide the file path as argument!');
    return;
}

if (process.argv.length < 4) {
    console.error('You should provide the function name as argument!');
    return;
}

GTParseJSForFunctionCalls.findInFile(process.argv[2], process.argv[3])
.then(function(data) {
    for (var i = data.length - 1; i >= 0; i--) {
        console.log(data[i]);
    };
}, function(err) {
    throw err;
});
