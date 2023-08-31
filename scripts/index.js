import { createAutoSearch } from "./autoSearch.js";

// Fetches data from API
// fetchData(input);
// onMovieSelect(movie);

// Autocomplete widget to search results
createAutoSearch({
    root: document.querySelector('.autocomplete')
});

// Feeds HTML template to DOM
// movieTemplate