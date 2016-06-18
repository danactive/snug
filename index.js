const cheerio = require('cheerio');
const fs = require('fs');
const html = fs.readFileSync('./country.html'); // todo use Casper.js to get HTML
const $ = cheerio.load(html);

const title = $('title').text();

console.log(title);
//=> <h2 class="title welcome">Hello there!</h2>