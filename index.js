const req = require('request');
const cheerio = require('cheerio');



const options = {
    headers: { 'user-agent': 'node.js' }
}
req('https://www.olivegarden.com/menu-listing/dinner', options, (error, success, html) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', success && success.statusCode); // Print the response status code if a response was received
    console.log('body:', html); // Print the HTML for the Google homepage.

    //CHEERIO
    const $ = cheerio.load(html);
    const content = $('.item-list-container');

    //console.log(content.html());
    // console.log(content.text());
    // const output = content.children('div').text();
    const output = content.html();

    console.log(output);
});


// const olivegarden = () => {

// }


