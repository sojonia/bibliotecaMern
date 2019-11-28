import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BookDetails.css";
import axios from "axios";

// READ-obtener-GET
class ShowBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get("/:id" + this.props.match.params.id)
      .then(res => {
        this.setState({
          book: res.data
        });
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
      });
  }

  // DELETE-borrar-delete
  onDeleteClick(id) {
    axios

      // The DELETE method deletes the specified resource.
      .delete("/:id" + id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      });
  }

  // render method
  render() {
    const book = this.state.book;
    console.log(book);
    let BookItem = (
      <section>
        <table className="table table-hover table-dark">
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Titulo</td>
              <td>{book.title}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Autor</td>
              <td>{book.author}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>ISBN</td>
              <td>{book.isbn}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Editorial</td>
              <td>{book.publisher}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Fecha de Publicación</td>
              <td>{book.published_date}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Descripción</td>
              <td>{book.description}</td>
            </tr>
          </tbody>
        </table>
      </section>
    );

    return (
      <section className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <nav className="col-md-10 m-auto">
              <Link to="/" className="btn btn-show-all-books float-left">
                Muestra la lista de libros.
              </Link>
            </nav>
            <header className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Registro del libro</h1>
            </header>
          </div>
          <div>{BookItem}</div>
          <div className="row">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-delete-book btn-lg btn-block"
                onClick={this.onDeleteClick.bind(this, book._id)}
              >
                Borrar libro
              </button>
              <br />
            </div>
            <div className="col-md-6">
              <Link
                to={`/edit-book/${book._id}`}
                id={book._id}
                className="btn btn-edit-book btn-lg btn-block"
              >
                Editar libro
              </Link>
              <br />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ShowBookDetails;
