


var finalvalue = SetUp(process.argv);

console.log(finalvalue);

function SetUp (argument) {
		var sum = 0;
	for (var i = 0; i < argument.length; i++) {
		
		if (argument[i] == argument[0] || argument[i] == argument[1]) {
				
		}else{
			sum	= sum + Number(argument[i]);
		};
	};

	return sum;
}