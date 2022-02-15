const arrayNums = [ 1, 2, 3, 4 ];

function multiplicaPorDez(num) {
	return (num * 10);
}

const arrayMultiplicada = arrayNums.map(multiplicaPorDez);

console.log(arrayMultiplicada);