// Search results with 1 sec delay input - Refactored with wrapper func debounce
export const debounce = (func, timeDelay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, timeDelay);
    };
};


