import React, { Component } from "react";
// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Components
import CreateBook from "./components/CreateBook";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import UpdateBook from "./components/UpdateBook";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={BooksList} />
        <Route path="/create-book" component={CreateBook} />
        <Route path="/edit-book/:id" component={UpdateBook} />
        <Route path="/show-book/:id" component={BookDetails} />
      </Router>
    );
  }
}

export default App;
