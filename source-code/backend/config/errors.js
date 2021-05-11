const glob  = require('glob'),
    _ = require('lodash'),
    fs = require('fs'),
    winston = require('./winston'),
    routePath = 'app/*/*.error.json';

winston.info('error messages are loading...');


//initialize with common error objects
let errorObject = {}

glob.sync(routePath).forEach( file => {
    const errorFile = fs.readFileSync(file, 'utf-8');
    if (errorFile.length >= 10) {
        _.extend(errorObject, JSON.parse(errorFile));
        winston.info(file + ' is loaded');
    }

});

module.exports = errorObject;