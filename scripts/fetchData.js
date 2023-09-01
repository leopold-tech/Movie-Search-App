import { apiKey } from "../scripts/config.js";
import { movieTemplate } from "../scripts/movieTemplate.js";
import { compareSummary } from "../scripts/index.js";

let leftMovie;
let rightMovie;
export async function onMovieSelect(movie, summary, side) {
    const movieDetails = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: apiKey,
            i: movie.imdbID
        }
    });

    summary.innerHTML = movieTemplate(movieDetails.data);

    // Code for movie comparison
    if (side === 'left') {
        leftMovie = movieDetails.data;
    } else {
        rightMovie = movieDetails.data;
    }

    if (leftMovie && rightMovie) {
        compareSummary();
    }
};