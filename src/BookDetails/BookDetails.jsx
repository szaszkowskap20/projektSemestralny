import React from 'react';

function BookDetails({ book, onClose }) {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">{book.volumeInfo.title}</h5>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
      <div className="card-body">
        <p className="card-text">
          <strong>Autor:</strong>{' '}
          {book.volumeInfo.authors
            ? book.volumeInfo.authors.join(', ')
            : 'Brak informacji'}
        </p>
        <p className="card-text">
          <strong>Data publikacji:</strong> {book.volumeInfo.publishedDate}
        </p>
        <p className="card-text">
          <strong>Liczba stron:</strong> {book.volumeInfo.pageCount}
        </p>
        <p className="card-text">
          <strong>Opis:</strong> {book.volumeInfo.description}
        </p>
      </div>
    </div>
  );
}

export default BookDetails;
