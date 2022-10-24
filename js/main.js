const elList = document.querySelector(".js-list")
const elMovieTemplate = document.querySelector(".movie-temp").content;
const elMovieFragment = document.createDocumentFragment();

for (const kino of kinolar) {
    const elMovieTempClone = elMovieTemplate.cloneNode(true);

    elMovieTempClone.querySelector(".js-movie-name").textContent = kino.title;
    elMovieTempClone.querySelector(".js-year").textContent = kino.year;
    elMovieTempClone.querySelector(".js-cast").textContent = kino.cast.join(", ");
    elMovieTempClone.querySelector(".js-genres").textContent = kino.genres.join(", ");

    elMovieFragment.appendChild(elMovieTempClone);
};

elList.appendChild(elMovieFragment)