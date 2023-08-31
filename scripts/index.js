import { createAutoSearch } from "./autoSearch.js";
import { apiKey } from "./config.js";
import { onMovieSelect } from "./fetchData.js";

// Fetches data from API
// onMovieSelect(movie);

// Additional functions/ arguements for createAutoSearch()
const autoSearchConfig = {
    //renders autosearch options
    renderOption(movie) {
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
};

// Autocomplete widget to search results
createAutoSearch({
    ...autoSearchConfig, 
    root: document.querySelector('#left-autocomplete')
});

createAutoSearch({
    ...autoSearchConfig, 
    root: document.querySelector('#right-autocomplete')
});

// Feeds HTML template to DOM
// movieTemplate;