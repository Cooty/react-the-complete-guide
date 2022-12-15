/**
 * @param val
 * @returns {boolean}
 */
export const isEmpty = (val) => {
    return val.trim().length === 0;
}

/**
 * @param val
 * @returns {boolean}
 */
export const isNegative = (val) => {
    return val < 0;
}
