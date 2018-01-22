var https = require('https');

var getHTML = require('../httpFunctions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'

};

function printlowerHTML (html) {
  //var htmlInput = html.toString()
   console.log(html.toLowerCase());
}

getHTML(requestOptions,printlowerHTML)
/*
var https = require('https');

var getHTML = require('../httpFunctions/getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html);
}


getHTML(requestOptions,printHTML)

//gEThttpFunctions(requestOptions, printHTML)

*/