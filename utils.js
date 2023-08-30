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


// Search results with 1 sec delay input - avoids unnecessary calls to api
// const onInput = (e) => {
//     if (timeoutId) {
//         clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//         fetchData(e.target.value);
//     }, 1000);
// };
// input.addEventListener('input', onInput);

// Search results with ENTER key
// const input = document.querySelector('input');
// input.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         e.preventDefault();
//         fetchData(e.target.value);
//     }
// });