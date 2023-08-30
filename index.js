import { apiKey } from "./config.js";
import { debounce } from "./utils.js";

// Autocomplete widget to search results
const root = document.querySelector('.autocomplete');
root.innerHTML = `
    <label><b>Search for a movie</b></label>
    <input class="input" />
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results"></div>
        </div>
    </div>    
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsList = document.querySelector('.results');

// Fetches data from API
const fetchData = async (input) => {
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
};

// Uses input to show data from API in dropdown menu
const onInput = async (e) => {
    const movieList = await fetchData(e.target.value);
    console.log(movieList);

    // Remove dropdown & end process if movieList.length = 0
    if (!movieList.length) {
        dropdown.classList.remove('is-active');
        return;
    }

    resultsList.innerHTML = '';
    dropdown.classList.add('is-active');

    for (let movie of movieList) {
        const resultsOption = document.createElement('a');
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

        resultsOption.classList.add('dropdown-item');
        resultsOption.innerHTML = `
            <img src="${imgSrc}"/>
            <h3>${movie.Title} </h3>
            <p> (${movie.Year})</p>
        `;

        resultsOption.addEventListener('click', () => {
            input.value = movie.Title;
            dropdown.classList.remove('is-active');
        });

        resultsList.appendChild(resultsOption);
    }
};
input.addEventListener('input', debounce(onInput, 800));

// Listens for click event outside root & removes dropdown menu
document.addEventListener('click', event => {
    if (!root.contains(event.target)) {
        dropdown.classList.remove('is-active');
    }
}); 