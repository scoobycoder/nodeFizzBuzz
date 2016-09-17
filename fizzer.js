var fizz = function(number) {
	if (buzzes(number) && fizzes(number)) {
		return "fizzbuzz";
	}
	if (fizzes(number) || includesNumber(number, 3)) {
		return "fizz";
	}
	if (buzzes(number) || includesNumber(number, 5)) {
		return "buzz";
	}
	return number;
};

function includesNumber(number, includedNumber) {
	return (number.toString().includes(includedNumber));	
}

function buzzes(number) {
	return (number % 5) === 0;
}

function fizzes(number) {
	return (number % 3) === 0;
}

exports.fizzer = fizz;