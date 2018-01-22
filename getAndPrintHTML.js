var https = require('https');
//var buf = new Buffer(1024);

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


 https.get(requestOptions, function (response) {

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
getAndPrintHTML ()

//buffer with string
/*https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('Chunk Received. Length',data , '\n' , data.length);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}
*/