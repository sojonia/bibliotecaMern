import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: "",
        isbn: "",
        author: "",
        description: "",
        published_date: "",
        publisher: ""
      }
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("/api/books/"+this.props.match.params.id)
      .then(({ data }) => {
        this.setState({ book: data });
      })
      .catch(err => {
        console.log("Error from UpdateBookInfo");
      });
  }

  onChange = e => {
    this.setState({ book: { [e.target.name]: e.target.value } });
  };

  onSubmit = e => {
    e.preventDefault();

    axios
      .put(
        "/api/books/" + this.props.match.params.id,
        this.state.book
      )
      .then(res => {
        this.props.history.push("/show-book/" + this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      });
  };

  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              {/* Link to Books List */}
              <Link to="/" className="btn btn-outline-warning float-left">
                Mostrar lista de libros
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Editar Libro</h1>
              <p className="lead text-center">
                Actualizar la informacion del libro
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={this.state.book.title}
                  onChange={this.onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
                <input
                  type="text"
                  placeholder="ISBN"
                  name="isbn"
                  className="form-control"
                  value={this.state.book.isbn}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Autor</label>
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={this.state.book.author}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={this.state.book.description}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="published_date">Fecha de Publicación</label>
                <input
                  type="date"
                  placeholder="published_date"
                  name="published_date"
                  className="form-control"
                  value={this.state.book.published_date}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Editorial</label>
                <input
                  type="text"
                  placeholder="Publisher of this Book"
                  name="publisher"
                  className="form-control"
                  value={this.state.book.publisher}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Actualizar libro
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBookInfo;
