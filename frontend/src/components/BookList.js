import React from 'react';

const BookList = ({ books, refresh }) => {
  const updateStatus = async (id, newStatus) => {
    await fetch(`http://localhost:5000/api/books/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });
    refresh();
  };

  const deleteBook = async (id) => {
    await fetch(`http://localhost:5000/api/books/${id}`, {
      method: 'DELETE'
    });
    refresh();
  };

  return (
    <div>
      <h2>📚 Book List</h2>
      <table className="books-table">
        <thead>
          <tr>
            <th>📖 Title</th>
            <th>✍️ Author</th>
            <th>📌 Status</th>
            <th>🛠️ Update</th>
            <th>🗑️ Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No books available</td>
            </tr>
          ) : (
            books.map(book => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.status}</td>
                <td>
                  <select value={book.status} onChange={(e) => updateStatus(book._id, e.target.value)}>
                    <option>Not Started</option>
                    <option>Reading</option>
                    <option>Completed</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => deleteBook(book._id)}>❌</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
