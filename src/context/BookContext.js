import React, { createContext, useState } from "react";
import axios from "axios";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (searchTerm) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    setBooks(response.data.items || []);
  };

  return (
    <BookContext.Provider value={{ books, fetchBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
