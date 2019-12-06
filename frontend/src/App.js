import React, { Component } from "react";
// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Components
import CreateBook from "./components/create-book/index";
import BooksList from "./components/list-book/index";
import BookDetails from "./components/show-book/index";
import UpdateBook from "./components/update-book/index";

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
