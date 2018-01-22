module.exports = function getHTML(options,callback) {

  var https = require('https');

  var buffer = ""

  https.get(options, function(response) {

  response.setEncoding('utf8');

   response.on('data', function(data) {
     buffer += data
     //cnsole.log(buffer)

    })

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(buffer);
      });
   });
 //console.log(callback(buffer));
}



