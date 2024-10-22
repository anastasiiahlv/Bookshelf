import { useContext } from 'react'
import { BookContext } from '../BookshelfContext';
import Form from './Form'
import { useNavigate } from "react-router-dom";

const AddBookForm = () => {
    const navigate = useNavigate();

    const {books, setBooks} = useContext(BookContext);

    const handleOnSubmit = (book) => {
        setBooks([book, ...books])
        navigate('/');
    }

    return (
        <div className='addBookForm'>
            <Form handleSubmit={handleOnSubmit} />      
        </div>
    )
}

export default AddBookForm