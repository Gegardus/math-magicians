import calculate from './calculate'

describe('implements calculations', () => {
    test('returns result of multiplication 8 * 8', () => {
        let num = calculate({}, '8');
        num = calculate(num, 'x');
        num = calculate(num, '8');
        num = calculate(num, '=');
        expect(num.total).toBe('64');
    });

    test('should return result of division 8 / 2', () => {
        let num = calculate({}, '8');
        num = calculate(num, '÷');
        num = calculate(num, '2');
        num = calculate(num, '=');
        expect(num.total).toBe('4');
      });

    test('should return result of addition 5 + 5', () => {
      let num = calculate({}, '5');
      num = calculate(num, '+');
      num = calculate(num, '5');
      num = calculate(num, '=');
      expect(num.total).toBe('10');
    });

    test('should return result of substraction 9 - 5', () => {
        let num = calculate({}, '9');
        num = calculate(num, '-');
        num = calculate(num, '5');
        num = calculate(num, '=');
        expect(num.total).toBe('4');
      });

      test('should throw an error if input is string', () => {
        let res = calculate({}, 'n');
        res = calculate(res, '=');
        expect(res).toEqual({});
      });

      test('should return null if AC is clicked', () => {
        const res = calculate({}, 'AC');
        expect(res.next).toBe(null);
        expect(res.total).toBe(null);
        expect(res.operation).toBe(null);
      });

      test('should return empty object if 0 is clicked twice', () => {
        let res = calculate({}, '0');
        res = calculate(res, '0');
        expect(res).toStrictEqual({});
      });

      test('should return negative num if calculate negative number', () => {
        let res = calculate({}, '1');
        res = calculate(res, '+/-');
        res = calculate(res, '-');
        res = calculate(res, '2');
        res = calculate(res, '=');
        expect(res.total).toBe('-3');
      });    
});
