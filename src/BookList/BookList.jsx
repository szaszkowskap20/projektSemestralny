import React, { useState, useEffect } from 'react';
import BookDetails from '../BookDetails/BookDetails';

function BookList({ onBookClick }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('programming');
  const [favoriteBooks, setFavoriteBooks] = useState(
    JSON.parse(localStorage.getItem('favorites'))
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (searchTerm) {
      fetchBooks(searchTerm);
    } else {
      fetchBooksByCategory(selectedCategory);
    }
  }, [selectedCategory, searchTerm]);

  const fetchBooksByCategory = async (category) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${category}`
      );
      if (!response.ok) {
        throw new Error('Wystąpił problem z pobraniem danych');
      }
      const data = await response.json();
      setBooks(data.items);
      setError('');
    } catch (error) {
      console.error('Błąd pobierania danych:', error);
      setError('Wystąpił problem z pobraniem danych');
    }
  };

  const fetchBooks = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error('Wystąpił problem z pobraniem danych');
      }
      const data = await response.json();
      if (data.items.length === 0) {
        setError(
          'Nie znaleziono żadnych książek pasujących do wyszukiwanej frazy'
        );
      } else {
        setBooks(data.items);
        setError('');
      }
    } catch (error) {
      console.error('Błąd pobierania danych:', error);
      setError('Wystąpił problem z pobraniem danych');
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSearchTerm('');
  };

  const showBookDetails = (book) => {
    setSelectedBook(book);
  };

  const closeBookDetails = () => {
    setSelectedBook(null);
  };

  const handleSearch = () => {
    fetchBooks(searchTerm);
    setSelectedCategory('');
  };

  const addToFavorites = (book) => {
    const isAlreadyFavorite = favoriteBooks.some(
      (favorite) => favorite.id === book.id
    );
    if (isAlreadyFavorite) {
      alert('Ta książka jest już na liście ulubionych!');
      return;
    } else {
      alert('Dodano do ulubionych');
    }
    setFavoriteBooks((prevFavorites) => [...prevFavorites, book]);
    localStorage.setItem('favorites', JSON.stringify([...favoriteBooks, book]));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista książek</h2>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="category" className="form-label">
            Wybierz kategorię:
          </label>
          <select
            id="category"
            className="form-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="programming">Programowanie</option>
            <option value="fiction">Literatura piękna</option>
            <option value="history">Historia</option>
            <option value="fantasy">Fantastyka</option>
          </select>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Wyszukaj książkę po nazwie"
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              Szukaj
            </button>
          </div>
        </div>
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <ul className="list-group list-group-item-light">
        {books.map((book) => (
          <li
            key={book.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {book.volumeInfo.title}
            <div>
              <button
                className="btn btn-success me-2"
                onClick={() => addToFavorites(book)}
              >
                Dodaj do ulubionych
              </button>
              <button
                className="btn btn-info"
                onClick={() => showBookDetails(book)}
              >
                Pokaż szczegóły
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedBook && (
        <BookDetails book={selectedBook} onClose={closeBookDetails} />
      )}
    </div>
  );
}

export default BookList;
