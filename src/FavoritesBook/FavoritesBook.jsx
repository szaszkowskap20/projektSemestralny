import React, { useState, useEffect } from 'react';

function FavoriteBooks() {
  const [favoriteBooks, setFavoriteBooks] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavoriteBooks(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFromFavorites = (bookId) => {
    const updatedFavorites = favoriteBooks.filter((book) => book.id !== bookId);
    setFavoriteBooks(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Ulubione książki</h2>
      <ul className="list-group list-group-item-success mb-2">
        {favoriteBooks.map((book) => (
          <li
            key={book.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {book.volumeInfo.title}
            <button
              className="btn btn-danger"
              onClick={() => removeFromFavorites(book.id)}
            >
              Usuń z ulubionych
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteBooks;
