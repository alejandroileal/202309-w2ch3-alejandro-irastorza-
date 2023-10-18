import { arrayLength } from './array-functions';

describe('Given the factorial function', () => {
  describe('When the argument is [1, 2, 3]', () => {
    test('The result should be 3', () => {
      const n = [1, 2, 3];
      const expected = 3;

      const result = arrayLength(n);

      expect(result).toBe(expected);
    });
  });
});
