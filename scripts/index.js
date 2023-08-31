import { createAutoSearch } from "./autoSearch.js";

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
    }
});

// Feeds HTML template to DOM
// movieTemplate;