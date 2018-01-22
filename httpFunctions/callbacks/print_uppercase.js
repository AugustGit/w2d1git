var https = require('https');

var getHTML = require('../httpFunctions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'

};

function printUpperHTML (html) {
  //var htmlInput = html.toString()
   console.log(html.toUpperCase());
}

getHTML(requestOptions,printUpperHTML)
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