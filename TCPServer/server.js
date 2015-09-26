

var net = require('net');

var server = net.createServer(function  (socket) {

	socket.on('end', function(){

		console.log('')
	})
	var date = new Date();
	var year = date.getFullYear()
    var month = date.getMonth() + 1    // starts at 0
    var day = date.getDate()      // returns the day of month
    var hour = date.getHours()
    var min = date.getMinutes()

    if (day < 10) {
    	day = '0'+day;
    };

    var fulltime = year+'-'+ month+'-'+day;
     fulltime = fulltime + " " + hour + ':' + min;

	socket.write(fulltime);
	socket.write('\n')

	socket.end();
});

server.listen(process.argv[2], function(){

	
});

