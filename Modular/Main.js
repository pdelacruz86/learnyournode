

var mymodule = require('./FilterModule.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function callback (err, data) {

	data.forEach(function(file){
		console.log(file);
	})
	
});