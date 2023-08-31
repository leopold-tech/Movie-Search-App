import { apiKey } from "./config.js";
import { movieTemplate } from "./movieTemplate.js";

export async function onMovieSelect(movie, summary) {
    const movieDetails = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: apiKey,
            i: movie.imdbID
        }
    });
    console.log(movieDetails.data);

    summary.innerHTML = movieTemplate(movieDetails.data);
};