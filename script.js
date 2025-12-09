const showFilmsBtn = document.getElementById('show-films-btn');
const addFilmBtn = document.getElementById('add-film-btn');
const findFilmBtn = document.getElementById('search-film-btn');
const markFilmBtn = document.getElementById('mark-film-btn');
const contentBlock = document.getElementById('content');

const movies = [
  { title: 'Inception', isAvailable: true },
  { title: 'The Dark Knight', isAvailable: true },
  { title: 'Avatar', isAvailable: false },
  { title: 'Titanic', isAvailable: true },
  { title: 'Avengers: Endgame', isAvailable: false },
];

const clearContent = () => {
  contentBlock.innerHTML = '';
};

const showFilms = () => {
  clearContent();

  const moviesList = document.createElement('ul');
  contentBlock.append(moviesList);

  for (const movie of movies) {
    const movieItem = document.createElement('li');
    movieItem.textContent = `${movie.title} - ${movie.isAvailable ? 'Доступен' : 'Не доступен'}`;
    moviesList.append(movieItem);
  }
}


showFilmsBtn.addEventListener('click',showFilms)