import { createAutoSearch } from "./autoSearch.js";
import { onMovieSelect } from "./fetchData.js";


// Fetches data from API
// fetchData(input);
// onMovieSelect(movie);

// Autocomplete widget to search results
createAutoSearch({
    root: document.querySelector('.autocomplete'), 
    renderOption(movie) {                           //renders autosearch options
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        return `
        <img src="${imgSrc}"/>
        ${movie.Title} (${movie.Year})
    `;
    },
    onOptionSelect(movie) {
        onMovieSelect(movie);
    }, 
    inputValue(movie) {
        return movie.Title;
    }
});

// onOptionSelect(movie) doesn't work

// Feeds HTML template to DOM
// movieTemplate;