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

    const handleChange = (e) => {
        setBookState({
            ...bookState,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit({
            Id: book ? book.Id : uuidv4(),
            date: new Date(),
            ...bookState
        });
        setBookState({ Title: '', Author: '', Tag: '', Status: '', Rating: '' });
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
                    min={type === 'number' ? 1 : undefined} 
                    max={type === 'number' ? 5 : undefined} 
                />
            </div>
        );
    };

    // Додаємо випадаючий список для статусу
    const selectField = (label, name, options) => {
        return (
            <div className="form-field">
                <label>{label}</label>
                <select
                    name={name}
                    value={bookState[name]}
                    onChange={handleChange}
                >
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
            {selectField('Book Status', 'Status', ['Reading', 'Finished', 'To Read'])} {/* Випадаючий список */}
            {inputField('Book Rating', 'Rating', 'number', 'Rate from 1 to 5')}
            <button type='submit' className='btnForm' disabled={disabledSubmit}>
                {book ? 'Update' : 'Submit'}
            </button>
        </form>
    );
};

export default Form;


