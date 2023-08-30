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
    console.log(res);
};

const onInput = e => {
    fetchData(e.target.value);
};
input.addEventListener('input', debounce(onInput, 800));