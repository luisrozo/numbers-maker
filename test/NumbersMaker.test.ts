import { FIBONACCI_STRATEGY, SEQUENTIAL_STRATEGY } from '../src/constants';
import { NumbersMaker } from '../src/NumbersMaker';

describe('test NumbersMaker class', () => {

    let instance: NumbersMaker;

    beforeEach(() => {
        instance = new NumbersMaker();
    });

    it('should return numbers as an array', () => {
        expect(instance).toBeInstanceOf(NumbersMaker);

        const numbers: string[] = instance.makeNumbers();

        expect(numbers).toBeDefined();
        expect(Array.isArray(numbers)).toBe(true);
    });

    it('should return 0 numbers', () => {

        instance.setQuantity(0);

        const expected: string[] = [];
        const numbers: string[] = instance.makeNumbers();

        expect(Array.from(numbers)).toStrictEqual(expected);

    });

    it('should return 3 sequential numbers', () => {

        instance.setQuantity(3);
        instance.setAlgorithm(SEQUENTIAL_STRATEGY);

        const expected: string[] = ['000000', '000001', '000002'];
        const numbers: string[] = instance.makeNumbers();

        expect(numbers).toStrictEqual(expected);

    });

    it('should return 5 fibonacci numbers', () => {

        instance.setQuantity(5);
        instance.setAlgorithm(FIBONACCI_STRATEGY);

        const expected: string[] = ['000001', '000002', '000003', '000005', '000008'];
        const numbers: string[] = instance.makeNumbers();

        expect(numbers).toStrictEqual(expected);

    });

});