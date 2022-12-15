import { getDateParts } from './date-time';

describe('Utilities for working with date-time', ()=> {
    describe('getDateParts', () => {
        const mockDate = new Date('1986-10-14');

        it('returns the year, month and day separately', () => {
            const { year, month, day } = getDateParts(mockDate);
            expect(year).toEqual(1986);
            expect(month).toEqual('October');
            expect(day).toBe('14');
        });
    })
});