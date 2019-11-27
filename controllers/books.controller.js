// Object of Functions
const booksCtrl = {};

// Book Model
const Book = require("../models/Book");

// Get all books
// route '/' GET
booksCtrl.getBooks = (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: "No Books found" }));
};

// route '/' POST
// add/save book
booksCtrl.createBook = (req, res) => {
  Book.create(req.body)
    .then(book => res.json({ msg: "Book added successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to add this book  :C" })
    );
};

// route '/:id' GET
// Get single book by id
booksCtrl.getBook = (req, res) => {
  console.log("req", req);
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: "No Book found" }));
};

// route '/:id'  DELETE
// Delete book by id
booksCtrl.deleteBook = (req, res) => {
  Book.findByIdAndDelete(req.params.id, req.body)
    .then(book => res.json({ mgs: "Book entry deleted successfully" }))
    .catch(err => res.status(404).json({ error: "No such a book" }));
};

// route '/:id' PUT
// Delete book by id
booksCtrl.updateBook = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: "Updated successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
};

module.exports = booksCtrl;
