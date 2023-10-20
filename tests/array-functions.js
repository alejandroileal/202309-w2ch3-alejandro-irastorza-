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

// Array.unshift()

export const arrayUnshift = (arrayToIterate, item) => {
  if (Array.isArray(item)) {
    const unshiftArrayToArray = [...item, ...arrayToIterate];

    return arrayLength(unshiftArrayToArray);
  }

  const temporaryArray = [0, ...arrayToIterate];
  temporaryArray[0] = item;

  return arrayLength(temporaryArray);
};

// Array.pop()

export const arrayPop = (arrayToIterate) => {
  const lastElementPosition = arrayLength(arrayToIterate) - 1;
  const lastElement = arrayToIterate[lastElementPosition];
  console.log(lastElement);
  return lastElement;
};

// Array.shift()

export const arrayPop = (arrayToIterate, ...itemToAdd) => {
  export const arrayShift = (arrayToIterate, item) => {
    const newArray = [...arrayToIterate, ...item];

    return arrayLength(newArray);
  };
};

// Array.some()

export const arraySome = (arrayToIterate, condition) => {
  for (let i = 0; i < arrayToIterate.length; i++) {
    if (condition(arrayToIterate[i])) {
      return true;
    }
  }
  return false;
};

// Array.every()

export const arrayEvery = (arrayToIterate, conditionToCompare) => {
  for (let i = 0; i < arrayToIterate.length; i++) {
    if (!conditionToCompare(arrayToIterate[i])) {
      return false;
    }
  }
  return true;
};

// Array.find()

export const miFind = (arrayToSearch, condition) => {
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (condition(arrayToSearch[i])) {
      return arrayToSearch[i];
    }
  }
  return undefined;
};
