const showFilmBtn = document.getElementById('show-films-btn');
const addFilmBtn = document.getElementById('add-films-btn');
const findFilmBtn = document.getElementById('search-films-btn');
const markFilmBtn = document.getElementById('mark-films-btn');
const contentBlock = document.getElementById('content');

const movies = [
    { title: 'Inception', isAvailable: true },
    { title: 'The Dark Knight', isAvailable: true },
    { title: 'Avatar', isAvailable: false },
    { title: 'Titanic', isAvailable: true },
    { title: 'Avengers', isAvailable: false },
]
const clearContent = ()=> {
    contentBlock.innerHTML = ''
}
const showFilms = () => {
    clearContent()

    const moviesList = document.createElement('ul')
    contentBlock.append(moviesList)

    for (const movie of movies)
        console.log(movie.title)
    const movieItem = document.createElement('li')
    movieItem.textContent = `${movie.isAvailable ? 'Доступен' : 'Не доступен'}` 
    moviesList.append(movieItem)

}

showFilmBtn.addEventListener('click', showFilms)