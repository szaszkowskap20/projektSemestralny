import React from 'react';
import {
  NavLink,
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import Main from './Main/Main';
import BookList from './BookList/BookList';
import FavoriteBooks from './FavoritesBook/FavoritesBook';

function App() {
  return (
    <div className="container">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Strona Główna
            </NavLink>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/BookList">
                  Lista Książek
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/FavoriteBook">
                  Ulubione Książki
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/FavoriteBook" element={<FavoriteBooks />} />
          <Route path="/BookList" element={<BookList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
