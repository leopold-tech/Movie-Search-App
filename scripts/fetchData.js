import { apiKey } from "./config.js";
import { movieTemplate } from "./movieTemplate.js";

export const fetchData = async (input) => {
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

export async function onMovieSelect(movie) {
    const movieDetails = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: apiKey,
            i: movie.imdbID
        }
    });
    console.log(movieDetails.data);

    document.querySelector('.summary').innerHTML = movieTemplate(movieDetails.data);
};