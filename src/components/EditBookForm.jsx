import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookContext } from '../BookshelfContext';
import Form from "./Form"

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, setBooks } = useContext(BookContext);
  const bookToEdit = books.find(book => book.Id === id);

  const handleOnSubmit = (updatedBook) => {
      const updatedBooks = books.map(book => 
          book.Id === id ? updatedBook : book
      );
      setBooks(updatedBooks);
      navigate('/');
  }

  return (
      <div className="addForm">
          <Form book={bookToEdit} handleSubmit={handleOnSubmit} />
      </div>
  );
}

export default EditBook;