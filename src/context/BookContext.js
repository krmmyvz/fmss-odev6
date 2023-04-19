import React, { createContext, useState } from "react";
import axios from "axios";

// Bu kod, BookContext adlı bir bağlam nesnesi oluşturur.
// createContext() işlevi kullanılarak BookContext oluşturulur.
export const BookContext = createContext();

const BookContextProvider = (props) => {
  // useState() kancası, kitapları tutmak için bir boş dizi tanımlar.
  const [books, setBooks] = useState([]);
  // fetchBooks() fonksiyonu, Google Books API'den kitapları getirir.
  const fetchBooks = async (searchTerm) => {
    // Axios kütüphanesi kullanılarak API'den yanıt alınır ve yanıtın "items" özelliğine sahip olan kitaplar alınır ve kitap durumunu güncellemek için setBooks() kullanılır.
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20`
    );
    setBooks(response.data.items || []);
  };

  return (
    // BookContext.Provider, BookContext'in alt bileşenlerine kitapları ve fetchBooks() işlevini sağlamak için kullanılır.
    <BookContext.Provider value={{ books, fetchBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};
// Bu kod, BookContextProvider bileşenini dışa aktarır.
export default BookContextProvider;
