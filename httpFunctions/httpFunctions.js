module.exports = function getHTML(options,callback) {
  var https = require('https');

  buffer = ""

https.get(options, function(response) {

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
