import React, { useEffect, useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await fetch('http://localhost:5000/api/books');
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <h1>📚 Book Tracker</h1>
      <BookForm refresh={getBooks} />
      <BookList books={books} refresh={getBooks} />
    </div>
  );
};

export default App;
