import operate from './operate';

describe('implements operations', () => {
    test('should add 2 + 2', () => {
      const result = operate(2, 2, '+');
      expect(result).toBe('4');
    });
  
    test('should multiply 2 x 2', () => {
      const result = operate(2, 2, 'x');
      expect(result).toBe('4');
    });
  
    test('should divide 4 / 2', () => {
      const result = operate(4, 2, '÷');
      expect(result).toBe('2');
    });
    
    test('should modulo 10 % 5 return 0', () => {
        const result = operate(10, 5, '%');
        expect(result).toBe('0');
      });

    test('should modulo 10 % 4 return 0', () => {
        const result = operate(10, 4, '%');
        expect(result).toBe('2');
      });
  
    test('should substract 80 - 40', () => {
      const result = operate(80, 40, '-');
      expect(result).toBe('40');
    });
  });
  