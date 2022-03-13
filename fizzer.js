const fizz = (number) => {
	if (isFizzBuzz(number)) return "fizzbuzz"
	if (isFizz(number, 3)) return "fizz"
	if (isBuzz(number, 5)) return "buzz"
	
	return number;
};

const isFizzBuzz = (number) => buzzes(number) && fizzes(number)
const isFizz = (number, singleNumber) => fizzes(number) || includesNumber(number, singleNumber)
const isBuzz = (number, singleNumber) => buzzes(number) || includesNumber(number, singleNumber)
const includesNumber = (number, includedNumber) => number.toString().includes(includedNumber)
const buzzes = (number) => (number % 5) === 0
const fizzes = (number) => (number % 3) === 0

exports.fizzer = fizz;