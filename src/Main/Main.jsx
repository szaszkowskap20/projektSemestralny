import React from 'react';

function Main() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Witaj w naszej aplikacji do śledzenia książek!
      </h1>
      <p>
        Tutaj możesz znaleźć listę książek w różnych kategoriach i dodawać je do
        ulubionych.
      </p>
      <h2>Co możesz zrobić na tej stronie?</h2>
      <ul>
        <li>
          Wybierz kategorię z menu, aby zobaczyć listę dostępnych książek.
        </li>
        <li>
          Dodaj interesujące Cię książki do ulubionych, aby łatwo śledzić swoje
          ulubione pozycje.
        </li>
        <li>
          Przejrzyj dostępne książki, klikając przycisk "Pokaż szczegóły" przy
          każdej książce.
        </li>
      </ul>
      <p>Teraz możesz rozpocząć korzystanie z aplikacji! Miłego czytania!</p>
    </div>
  );
}

export default Main;
