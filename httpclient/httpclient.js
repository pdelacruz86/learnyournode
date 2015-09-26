

var http = require('http');

http.get(process.argv[2], function(response){

	
response.on('data', function(data){

	response.setEncoding('utf8');

	console.log(data.toString());
})
});