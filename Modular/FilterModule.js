
var fs = require('fs');
var path = require('path');


module.exports = function(directoryname, fileextension, callback){

	fs.readdir(directoryname, function(err, data){

		if (err) {
			return callback(err);
		};

		var list = data.toString().split(',');

		var newlistwithextension = [];

		for (var i = 0; i < list.length; i++) {
			
			if (path.extname(list[i]) == "." + fileextension) {
				newlistwithextension.push(list[i]);
			};

		};

		return callback(null, newlistwithextension)

	});

};


