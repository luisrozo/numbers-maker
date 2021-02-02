import { pad } from '../src/helpers';

describe('test pad function', () => {

    it('should return 000003 for pad(3, 6)', () => {
        expect(pad(3, 6)).toBe('000003');
    });

    it('should return 331133 for pad(331133, 6)', () => {
        expect(pad(331133, 6)).toBe('331133');
    });

})