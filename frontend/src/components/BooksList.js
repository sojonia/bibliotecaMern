import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import "./BookList.css";

// READ-obtener-GET
class BookList extends Component {
  // constructor
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      books: []
    };
  }

  // Once component has been mount
  componentDidMount() {
    axios

      // GET is used to request data from a specified resource.
      .get("/")
      .then(res => {
        this.setState({
          // reciving books from DB - updating state
          books: res.data
        });
      })
      .catch(err => {
        console.log("Error from ShowBookList");
      });
  }

  // render method
  render() {
    // actual state
    const books = this.state.books;
    console.log(books);
    return (
      <section className="ShowBookList">
        <div className="container">
          <div className="row">
            <header className="col-md-12">
              <h2 className="display-4 text-center p-3">Lista de libros</h2>
            </header>
            <div className="col-md-11">
              <Link
                to="/create-book"
                className="btn btn-add-book btn-lg float-right"
              >
                + Añadir nuevo libro
              </Link>
            </div>
          </div>
          <main className="list">
            <section className="card-list m-3">
              {books.map(book => (
                <BookCard key={book._id} book={book} />
              ))}
            </section>
          </main>
        </div>
      </section>
    );
  }
}

export default BookList;
