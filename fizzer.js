var fizz = function(number) {
	if ((number % 15) === 0) {
		return "fizzbuzz";
	}
	if ((number % 3) === 0 || (number.toString().includes('3'))) {
		return "fizz";
	}
	if ((number % 5) === 0 || (number.toString().includes('5'))) {
		return "buzz";
	}
	return number;
};

exports.fizzer = fizz;