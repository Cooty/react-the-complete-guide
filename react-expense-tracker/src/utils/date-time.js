export function getDateParts(date) {
    return {
        month: date.toLocaleString('en-US', { month: 'long' }),
        day: date.toLocaleString('en-US', { day: '2-digit' }),
        year: date.getFullYear(), 
    }
};

export function getDateSecure(date) {
    return typeof date === Date ? date : new Date(date);
}
