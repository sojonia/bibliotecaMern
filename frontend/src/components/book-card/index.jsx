import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Funtional component with props
const BookCard = props => {
  // Receiving prop book wich is a object
  const book = props.book;
  return (
    // retriving data from one book
    <div className="card-book">
      <h2>
        <Link to={`/show-book/${book._id}`} id={book._id}>
          {book.title}
        </Link>
      </h2>
      <h3>{book.author}</h3>
      <h4>{book.publisher}</h4>
      <p>{book.description}</p>
    </div>
  );
};

export default BookCard;
