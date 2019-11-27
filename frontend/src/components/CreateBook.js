import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import "./CreateBook.css";
// CREATE-enviar-POST
//Create Book Component-class component
class CreateBook extends Component {
  //constructor
  constructor() {
    super();
    //state
    this.state = {
      title: "",
      isbn: "",
      author: "",
      description: "",
      published_date: "",
      publisher: ""
    };
    //  This is necessary to make 'this' work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Events Handlers - Class Methods
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const book = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher
    };
    // axios.post method to send an HTTP POST request to the back-end endpoint http://localhost:4000/api/books.
    //  This endpoint is expecting to get the new book object in JSON format in the request body.
    // Therefore we need to pass in the book object as a second argument.
    axios
      .post("http://localhost:4000/api/books", book)
      .then(res => {
        this.setState({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: ""
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      });
    console.log(`Form submitted:`);
    // console.log(`${book}`)
    console.log(`title: ${book.title}`);
    console.log(`title: ${book.isbn}`);
    console.log(`title: ${book.author}`);
    console.log(`title: ${book.description}`);
    console.log(`title: ${book.published_date}`);
    console.log(`title: ${book.publisher}`);
  };
  //render method
  render() {
    return (
      <section className="CreateBook">
        <div className="container">
          <div className="row">
            {/* Link to Books List */}
            <div className="col-md-8 m-auto">
              <Link to="/" className="btn btn-show-books float-left m-3">
                Mostrar la lista de libros
              </Link>
            </div>
            {/* Form Container */}
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center m-2">AÑADIR UN LIBRO</h1>
              {/* Form */}
              <form noValidate onSubmit={this.handleSubmit} className="m-3">
                {/* title field */}
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Titulo del libro"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </div>
                {/* isbn field */}
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="ISBN"
                    name="isbn"
                    className="form-control"
                    value={this.state.isbn}
                    onChange={this.handleChange}
                  />
                </div>
                {/* author field */}
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Autor"
                    name="author"
                    className="form-control"
                    value={this.state.author}
                    onChange={this.handleChange}
                  />
                </div>
                {/* description field */}
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Descripción"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </div>
                {/* published_date field */}
                <div className="form-group">
                  <input
                    type="date"
                    placeholder="Fecha de publicación"
                    name="published_date"
                    className="form-control"
                    value={this.state.published_date}
                    onChange={this.handleChange}
                  />
                </div>
                {/* publisher field */}
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Editorial"
                    name="publisher"
                    className="form-control"
                    value={this.state.publisher}
                    onChange={this.handleChange}
                  />
                </div>
                {/* button submit */}
                <input
                  type="submit"
                  className="btn btn-submit btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default CreateBook;
