import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = ({ book, handleSubmit }) => {
    const [bookState, setBookState] = useState({
        Title: book ? book.Title : '',
        Author: book ? book.Author : '',
        Tag: book ? book.Tag : '',
        Status: book ? book.Status : '',
        Rating: book ? book.Rating : '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setBookState({
            ...bookState,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (bookState.Rating === '' || bookState.Rating < 1 || bookState.Rating > 5) {
            setError('Значення має бути між 1 та 5.');
            return;
        }

        handleSubmit({
            Id: book ? book.Id : uuidv4(),
            date: new Date(),
            ...bookState
        });
        setBookState({ Title: '', Author: '', Tag: '', Status: '', Rating: '' });
        setError(''); 
    };

    const inputField = (label, name, type = 'text', placeholder = '') => {
        return (
            <div className="form-field">
                <label>{label}</label>
                <input
                    type={type}
                    name={name}
                    value={bookState[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
            </div>
        );
    };

    const selectField = (label, name, options) => {
        return (
            <div className="form-field">
                <label>{label}</label>
                <select
                    name={name}
                    value={bookState[name]}
                    onChange={handleChange}
                    required
                >
                    <option value="">Оберіть статус</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    };

    const disabledSubmit = !bookState.Title || !bookState.Author || !bookState.Tag || !bookState.Status || !bookState.Rating;

    return (
        <form className='form' onSubmit={onSubmit}>
            {inputField('Book Title', 'Title', 'text', 'Enter book title')}
            {inputField('Book Author', 'Author', 'text', 'Enter book author')}
            {inputField('Book Tag', 'Tag', 'text', 'Enter tags (e.g. fiction, mystery)')}
            {selectField('Book Status', 'Status', ['Reading', 'Finished', 'To Read'])}
            {inputField('Book Rating', 'Rating', 'number', 'Rate from 1 to 5')}
            {error && <p className="error-message">{error}</p>}
            <button type='submit' className='btnForm' disabled={disabledSubmit}>
                {book ? 'Update' : 'Submit'}
            </button>
        </form>
    );
};

export default Form;

