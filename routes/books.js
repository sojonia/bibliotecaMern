const { Router } = require("express");
const router = Router();

// Declaring controllers
const {
  getBooks,
  createBook,
  getBook,
  deleteBook,
  updateBook
} = require("../controllers/books.controller");

// Returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware
router
  .route("/")
  .get(getBooks)
  .post(createBook);

router
  .route("/:id")
  .get(getBook)
  .delete(deleteBook)
  .put(updateBook);

module.exports = router;
