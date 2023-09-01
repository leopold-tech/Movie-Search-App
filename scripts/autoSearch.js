import { debounce } from "./scripts/utils.js";

export const createAutoSearch = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {
    root.innerHTML = `
        <label><b>Type in to search</b></label>
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
        const itemList = await fetchData(e.target.value);

        // Remove dropdown & end process if itemList.length = 0
        if (!itemList.length) {
            dropdown.classList.remove('is-active');
            return;
        }

        resultsList.innerHTML = '';
        dropdown.classList.add('is-active');

        for (let item of itemList) {
            const resultsOption = document.createElement('a');
        
            resultsOption.classList.add('dropdown-item');
            resultsOption.innerHTML = renderOption(item);

            resultsOption.addEventListener('click', () => {
                input.value = inputValue(item);
                dropdown.classList.remove('is-active');
                onOptionSelect(item);
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