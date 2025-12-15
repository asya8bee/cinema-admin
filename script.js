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
};

const addFilm = () => {
  clearContent();
  const form = document.createElement('form');
  const titleInput = document.createElement('input');
  titleInput.placeholder = 'Название фильма';
  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Добавить фильм';
  form.append(titleInput, submitBtn);
  contentBlock.append(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newFilmTitle = titleInput.value.trim();
    if (newFilmTitle) {
      movies.push({ title: newFilmTitle, isAvailable: true });
      showFilms();
    }
  });
};

const searchFilm = () => {
  clearContent();
  const searchInput = document.createElement('input');
  searchInput.placeholder = 'Введите название фильма';
  const searchBtn = document.createElement('button');
  searchBtn.textContent = 'Найти';
  contentBlock.append(searchInput, searchBtn);

  searchBtn.addEventListener('click', () => {
    const searchQuery = searchInput.value.trim().toLowerCase();
    const foundMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery));
    clearContent();
    if (foundMovies.length > 0) {
      const moviesList = document.createElement('ul');
      foundMovies.forEach(movie => {
        const movieItem = document.createElement('li');
        movieItem.textContent = `${movie.title} - ${movie.isAvailable ? 'Доступен' : 'Не доступен'}`;
        moviesList.append(movieItem);
      });
      contentBlock.append(moviesList);
    } else {
      contentBlock.textContent = 'Фильмы не найдены';
    }
  });
};





showFilmsBtn.addEventListener('click',showFilms)