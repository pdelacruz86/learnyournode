var http = require('http');
var bl = require('bl');
var async = require('async');


var results=[];
var count = 0;

function printresults () {
	for (var i = 0; i < 3; i++) {
		console.log(results[i])

	}
}


function httpget(index){
	http.get(process.argv[2 + index], function(response){

		response.pipe(bl(function(err, data){

results[index] = data.toString();
count++;

if (count == 3) { printresults(); };

		}))



		
		

	});




}

for (var i = 0; i < 3; i++) {
httpget(i)};