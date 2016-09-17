var fizz = function(number = 0) {
	if (number === 0) {
		return 0;
	}
	if ((number % 15) === 0) {
		return "fizzbuzz";
	}
	if ((number % 3) === 0) {
		return "fizz";
	}
	if ((number % 5) === 0) {
		return "buzz";
	}
	return number;
};

exports.fizzer = fizz;