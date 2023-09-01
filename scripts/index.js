import { createAutoSearch } from "../scripts/autoSearch.js";
import { apiKey } from "../scripts/config.js";
import { onMovieSelect } from "../scripts/fetchData.js";

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
    inputValue(movie) {
        return `${movie.Title} (${movie.Year})`;
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
    root: document.querySelector('#left-autocomplete'),
    onOptionSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
    }
});

createAutoSearch({
    ...autoSearchConfig, 
    root: document.querySelector('#right-autocomplete'),
    onOptionSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
    }
});

export function compareSummary() {
    const leftSummaryStats = document.querySelectorAll('#left-summary .notification');
    const rightSummaryStats = document.querySelectorAll('#right-summary .notification');

    leftSummaryStats.forEach((leftStat, index) => {
        const rightStat = rightSummaryStats[index];

        const rightStatValue = parseInt(rightStat.dataset.value);
        const leftStatValue = parseInt(leftStat.dataset.value);

        if (leftStatValue > rightStatValue) {
            rightStat.classList.remove('is-primary');
            rightStat.classList.add('is-danger');
        } else {
            leftStat.classList.remove('is-primary');
            leftStat.classList.add('is-danger');
        }
    });
};
// Feeds HTML template to DOM
// movieTemplate;