var https = require('https');

function getAndPrintHTML (options) {

https.get(options, function (response) {

   response.setEncoding('utf8');

   response.on('data', function(data) {
     var dataChunk = data.toString('utf8');
     console.log(dataChunk)
    })

    response.on('end', function() {
      console.log('Response stream complete.');
     });

  })

};


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
//console.log(requestOptions)

getAndPrintHTML(requestOptions)