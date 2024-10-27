import { useContext } from 'react'
import { BookContext } from '../BookshelfContext';
import Book from './Book'

const Booklist = () => {
    const { books, setBooks } = useContext(BookContext);

    const handleRemoveBook = (Id) => {
        const filteredBooks = books.filter(book => book.Id !== Id); 
        setBooks(filteredBooks);
    };

    return (
        <div className='booklist'>
            {books.length ? books.map(book => (
                <Book book={book} key={book.Id} handleRemoveBook={handleRemoveBook} />  
            )) : (
                <p className='noBooks'>No books</p>
            )}
        </div>
    );    
}

export default Booklist;