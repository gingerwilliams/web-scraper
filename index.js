const req = require('request');
const $ = require('cheerio');

req('http://codedemos.com/sampleblog', (error, success, html) => {
    if (!error && success.statusCode == 200)
        console.log('200', html);
});