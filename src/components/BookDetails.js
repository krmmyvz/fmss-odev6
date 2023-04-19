import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

function BookDetails({ book, onClose }) {
  console.log(book);
  return (
    <div className="book-details-overlay" onClick={onClose}>
      <div
        className="book-details-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose}>
          <MdOutlineClose />
        </button>
        <div className="book-image-cont">
          {book.volumeInfo.imageLinks ? (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          ) : (
            <FaBookOpen className="placeholder-icon" />
          )}
        </div>{" "}
        <div className="detail-cont">
          <h2 className="book-title">{book.volumeInfo.title}</h2>
          {book.volumeInfo.authors && (
            <p className="book-author">
              By: {book.volumeInfo.authors.join(", ")}
            </p>
          )}
          <p className="book-published">
            Published: {book.volumeInfo.publishedDate}
          </p>
          <p className="book-description">
            {book.volumeInfo.industryIdentifiers[1].identifier}
          </p>
          <p className="book-pages">Pages: {book.volumeInfo.pageCount}</p>

          <p className="book-description">
            Language: {book.volumeInfo.language}
          </p>
          <div className="cont-button">
            <p className="book-link">
              <a href={book.volumeInfo.previewLink}>Preview Book</a>
            </p>
            <p className="book-link">
              <a href={book.volumeInfo.infoLink}>More Information</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
