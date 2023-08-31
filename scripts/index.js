import { createAutoSearch } from "./autoSearch.js";
import { onMovieSelect } from "./fetchData.js";


// Fetches data from API
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
    }, 
    async fetchData(input) {
        const res = await axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: apiKey,
                s: input
            }
        });
    
        if (res.data.Error) {
            return [];
        }
        return res.data.Search;
    }
});

// Feeds HTML template to DOM
// movieTemplate;