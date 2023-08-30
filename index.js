import { apiKey } from "./config.js";
import { debounce } from "./utils.js";

const input = document.querySelector('input');

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

const onInput = async (e) => {
    const movieList = await fetchData(e.target.value);
    console.log(movieList);

    for (let movie of movieList) {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${movie.Poster}"/>
            <h2>${movie.Title}</h2>
            <h3>${movie.Year}</h3>
        `;
        document.querySelector('.display').appendChild(div);
    }
};
input.addEventListener('input', debounce(onInput, 800));