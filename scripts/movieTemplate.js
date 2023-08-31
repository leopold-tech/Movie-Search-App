export const movieTemplate = (detail) => {

    const boxOfficeNum = parseInt(detail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
    const metaScore = parseInt(detail.Metascore);
    const imdbRating = parseFloat(detail.imdbRating);
    const imdbVotes = parseInt(detail.imdbVotes.replace(/,/g, ''));
    const awards = detail.Awards.split(' ').reduce((prev, word) => {
        const value = parseInt(word);

        if (isNaN(value)) {
            return prev;
        } else {
            return prev + value;
        }
    }, 0);

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
                    <h4>${detail.Actors}</h4>
                    <h6>${detail.Genre}</h6>
                    <p>${detail.Plot}</p>
                </div>
            </div>
        </article>        
        <article data-value=${awards} class="notification is-primary">
            <p class="title">${detail.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article data-value=${boxOfficeNum} class="notification is-primary">
            <p class="title">${detail.BoxOffice}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article data-value=${metaScore} class="notification is-primary">
            <p class="title">${detail.Metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article data-value=${imdbRating} class="notification is-primary">
            <p class="title">${detail.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article data-value=${imdbVotes} class="notification is-primary">
            <p class="title">${detail.imdbVotes}</p>
            <p class="subtitle">IMDB Votes</p>
        </article>
    `;
};