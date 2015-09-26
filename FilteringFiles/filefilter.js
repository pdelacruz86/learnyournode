
var fs = require('fs');
var path = require('path');

var directorio =  process.argv[2];

var extension = process.argv[3];

fs.readdir(directorio, function(err, data){

	if (err) {
		throw err;
		console.log(err);
	};

	var list = data.toString().split(',');

	var newlistwithextension = [];

	for (var i = 0; i < list.length; i++) {
		
		if (path.extname(list[i]) == "." + extension) {
			newlistwithextension.push(list[i]);
		};

	};

	
	for (var i = 0; i < newlistwithextension.length; i++) {
		console.log(newlistwithextension[i]);
	};

	

});
