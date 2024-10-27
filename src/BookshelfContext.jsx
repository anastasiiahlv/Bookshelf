import { createContext } from "react"
import useLocalStorage from "./UseLocalStorage";

export const BookContext = createContext();

const BookshelfContext = ({ children }) => {
  const [books, setBooks] = useLocalStorage('books', []);

  const value = { books, setBooks }

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  )
}

export default BookshelfContext;
