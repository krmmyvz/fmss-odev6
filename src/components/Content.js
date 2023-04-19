import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { FaBookOpen } from "react-icons/fa";
import BookDetails from "./BookDetails";

function Content() {
  // BookContext'den books state'ine erişim sağlanır
  const { books } = useContext(BookContext);

  // Seçilen kitabın id'sini tutmak için state oluşturulur
  const [selectedBookId, setSelectedBookId] = useState(null);

  // Kitap üzerine tıklandığında seçilen kitap id'si state'e atanır
  const handleBookClick = (id) => {
    setSelectedBookId(id);
  };

  // Kitap detay modal'ı kapatılırken seçilen kitap id'si state'ten silinir
  const handleClose = () => {
    setSelectedBookId(null);
  };

  return (
    <>
      {/* Kitap listesi */}
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book">
            <div className="book-image">
              {/* Kitap resmi varsa gösterilir, yoksa placeholder icon gösterilir */}
              {book.volumeInfo.imageLinks ? (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              ) : (
                <FaBookOpen className="placeholder-icon" />
              )}
            </div>

            <div className="book-details">
              <h2 className="book-title">{book.volumeInfo.title}</h2>
              {/* Yazar bilgisi varsa gösterilir */}
              {book.volumeInfo.authors && (
                <p className="book-author">
                  By: {book.volumeInfo.authors.join(", ")}
                </p>
              )}
              <p class="book-description">{book.volumeInfo.description}</p>
              {/* Kitap detay butonu */}
              <button
                class="book-button"
                onClick={() => handleBookClick(book.id)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Kitap detay modal'ı */}
      <div>
        {selectedBookId && (
          <BookDetails
            book={books.find((book) => book.id === selectedBookId)}
            onClose={handleClose}
          />
        )}
      </div>
    </>
  );
}

export default Content;
