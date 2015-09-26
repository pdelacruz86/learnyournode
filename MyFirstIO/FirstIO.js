

var fs = require('fs');

var filepath = process.argv[2].toString();
//console.log(filepath)

var buffer = fs.readFileSync(filepath);

var arrayofelements = buffer.toString().split('\n');



console.log(arrayofelements.length -1)