

var fs = require('fs');


var filename = process.argv[2];

var bufferstring = "";

fs.readFile(filename, function(error, data){

	if (error) {
		throw error;
	};

 	bufferstring = data.toString().split("\n");

	console.log(bufferstring.length - 1);

});

