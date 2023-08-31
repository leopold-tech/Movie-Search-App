export const movieTemplate = (detail) => {
    return `
        <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src="${detail.Poster}">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>${detail.Title}</h1>
                    <h4>${detail.Genre}</h4>
                    <p>${detail.Plot}</p>
                </div>
            </div>
        </article>
        <article class="notification is-primary">
            <p class="title">${detail.Actors}</p>
            <p class="subtitle">Starring</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${detail.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${detail.BoxOffice}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${detail.Metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${detail.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${detail.imdbVotes}</p>
            <p class="subtitle">IMDB Votes</p>
        </article>
    `;
};