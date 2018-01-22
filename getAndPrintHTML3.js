function getHTML (options,callback) {

  var https = require('https');

  buffer = ""

https.get(options, function (response) {

  response.setEncoding('utf8');

   response.on('data', function(data) {
     buffer += data
     console.log(buffer)
    })

    response.on('end', function() {
      console.log('Response stream complete.');
     });
  });
console.log(callback(buffer));
}


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)
/*

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
*/