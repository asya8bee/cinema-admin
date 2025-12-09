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