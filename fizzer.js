var fizz = function(number = 0) {
	if (number === 3) {
		return "fizz";
	}
	if (number === 5) {
		return "buzz";
	}
  return number;
};

exports.fizzer = fizz;