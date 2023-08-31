import { debounce } from "./utils.js";
import { fetchData, onMovieSelect } from "./fetchData.js";

//const root = document.querySelector('.autocomplete');

export const createAutoSearch = ({ root, renderOption, onOptionSelect, inputValue }) => {
    root.innerHTML = `
        <label><b>Search for a movie</b></label>
        <input class="input" />
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>
            </div>
        </div>    
    `;

    const input = root.querySelector('input');
    const dropdown = root.querySelector('.dropdown');
    const resultsList = root.querySelector('.results');

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
        
            resultsOption.classList.add('dropdown-item');
            resultsOption.innerHTML = renderOption(movie);

            resultsOption.addEventListener('click', () => {
                input.value = inputValue(movie);
                dropdown.classList.remove('is-active');
                onOptionSelect(movie);
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
};