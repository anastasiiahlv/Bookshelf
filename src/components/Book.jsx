import { useNavigate } from "react-router-dom";

const Book = ({ book, handleRemoveBook }) => {
    const navigate = useNavigate();

    const { Id, Title, Author, Tag, Status, Rating } = book;
    
    return (
        <div className="book">
            <h2>{Title}</h2>
            <div className='bookInfo'>
                <p>Author: {Author}</p> 
                <p>Tag: {Tag}</p> 
                <p>Status: {Status}</p> 
                <p>Rating: {Rating}</p> 
            </div>
            <div className="buttons">
                <button onClick={() => navigate(`/edit/${String(Id)}`)}>Edit</button>
                <button onClick={() => handleRemoveBook(Id)}>Delete</button>
            </div>
        </div>
    );
}

export default Book;