import { arrayLength, arrayPush, arrayUnshift } from './array-functions';

describe('Given the length function', () => {
	describe('When the argument is [1, 2, 3]', () => {
		test('The result should be 3', () => {
			const n = [1, 2, 3];
			const expected = 3;

			const result = arrayLength(n);

			expect(result).toBe(expected);
		});
	});

	describe('When the argument is "Hello"', () => {
		test('Then it should throw an error', () => {
			const n = 'Hello';

			expect(() => arrayLength(n)).toThrowError(
				'Asegúrate de utilizar un Array'
			);
		});
	});

	describe('When the argument is 3', () => {
		test('Then it should throw an error', () => {
			const n = 3;

			expect(() => arrayLength(n)).toThrowError(
				'Asegúrate de utilizar un Array'
			);
		});
	});

	describe('When the argument is {}', () => {
		test('Then it should throw an error', () => {
			const n = {};

			expect(() => arrayLength(n)).toThrowError(
				'Asegúrate de utilizar un Array'
			);
		});
	});

	describe('When the argument is []', () => {
		test('The result should be 0', () => {
			const n = [];
			const expected = 0;

			const result = arrayLength(n);

			expect(result).toBe(expected);
		});
	});
});

describe('Given the push function', () => {
	describe('When the argument is [1, 2, 3, 4], 5', () => {
		test('The result should be 5', () => {
			const n = [1, 2, 3, 4];
			const x = 5;
			const expected = 5;

			const result = arrayPush(n, x);

			expect(result).toBe(expected);
		});
	});

	describe('When the argument is [1, 2, 3, 4, 5], "six"', () => {
		test('The result should be 6', () => {
			const n = [1, 2, 3, 4, 5];
			const x = 'six';
			const expected = 6;

			const result = arrayPush(n, x);

			expect(result).toBe(expected);
		});
	});
});

describe('Given the unshift function', () => {
	describe('When the argument is ["e", "l", "l", "o"], "h', () => {
		test('The result should be 5', () => {
			const n = ['e', 'l', 'l', 'o'];
			const y = 'h';
			const expected = 5;

			const result = arrayUnshift(n, y);

			expect(result).toBe(expected);
		});
	});

	describe('When the argument is [1, 2, 3], 4, 5, 6', () => {
		test('The result should be 6', () => {
			const n = [1, 2, 3];
			const y = [4, 5, 6];
			const expected = 6;

			const result = arrayUnshift(n, y);

			expect(result).toBe(expected);
		});
	});
});
