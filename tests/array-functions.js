// Array.length()

export const arrayLength = (array) => {
	if (!Array.isArray(array)) {
		throw new Error('Asegúrate de utilizar un Array');
	}

	let acc = 0;

	for (const position of array) {
		acc++;
	}

	return acc;
};

// Array.push()
export const arrayPush = (arrayToPush, data) => {
	arrayToPush[arrayLength(arrayToPush)] = data;
	const newArrayLength = arrayLength(arrayToPush);
	return newArrayLength;
};
