var fs = require('fs');
var Promise = require('promise');

var GTParseJSForFunctionCalls = {};

GTParseJSForFunctionCalls.findInString = function(str, call) {
    var res = str.match(new RegExp('(^|[ ])' + call + '( |)\\(.*?\\)', 'gi'));
    if (!res) {
        return [];
    }
    return res.map(function(e) {
        return e.trim();
    });
};

GTParseJSForFunctionCalls.findInFile = function(path, call) {
    return new Promise(function(fulfill, reject) {
        fs.readFile(path, function(err, data) {
            if (err) {
                reject(err);
            }
            fulfill(GTParseJSForFunctionCalls.findInString(data.toString(), call));
        });
    });
};

module.exports = GTParseJSForFunctionCalls;
