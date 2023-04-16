import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { FaBookOpen } from "react-icons/fa";

function Content() {
  const { books } = useContext(BookContext);
  const handleDetails = () => {};
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="card">
          <div className="book-image-wrapper">
            {book.volumeInfo.imageLinks ? (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
            ) : (
              <div className="book-image-placeholder">
                <FaBookOpen className="placeholder-icon" />
              </div>
            )}
          </div>

          <div className="book-details">
            <h2 className="book-title">{book.volumeInfo.title}</h2>
            {book.volumeInfo.authors && (
              <p className="book-author">
                By: {book.volumeInfo.authors.join(", ")}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
