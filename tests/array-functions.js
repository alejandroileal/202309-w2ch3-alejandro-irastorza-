// Array.length()

export const arrayLength = (array) => {
	if (!Array.isArray(array)) {
		throw new Error('Asegúrate de utilizar un Array');
	}

	let acc = 0;

	for (const position of array) {
		console.log(position);
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

// Array.unshift()

export const arrayUnshift = (arrayToIterate, item) => {
	if (Array.isArray(item)) {
		const unshiftArrayToArray = [...item, ...arrayToIterate];

		return arrayLength(unshiftArrayToArray);
	}

	const temporaryArray = [0, ...arrayToIterate];
	temporaryArray[0] = item;
	console.log(temporaryArray);

	return arrayLength(temporaryArray);
};
