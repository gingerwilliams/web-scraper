# Web Scraping 101

## Dependencies
Request - Simplified HTTP client

> npm install request

`const request = require('request')`

```
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```
<!-- https://www.npmjs.com/package/request -->

Cheerio - Fast, flexible, and lean implementation of core jQuery designed specifically for the server

## Run Application

> nodemon index.js