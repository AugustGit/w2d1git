var https = require('https');

var getHTML = require('../httpFunctions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'

};

function printReverseHTML (html) {
  //var htmlInput = html.t""oString()
       console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions,printReverseHTML)
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