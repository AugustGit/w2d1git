var https = require('https');

var getHTML = require('./httpFunctions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  var htmlreg = html
  console.log(html);
}

getHTML(requestOptions,printHTML)