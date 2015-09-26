

var http = require('http');

var url = process.argv[2];

var bl = require('bl');

var concat = require('concat-stream');


http.get(url, function  (response) {
	
	response.pipe(bl(function(err, data){

		console.log(data.toString().length);


	}));

	response.pipe(concat(function(data){

		console.log(data.toString());


	}));
});