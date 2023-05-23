const express = require("express");
const bookFunction = require("../controller/book.controller");

const router = express.Router();

// get("URL" , functionHandller)

// get all notes
router.get("/book/get", bookFunction.getBookList);
router.get("/book/get/:bookId", bookFunction.getBookDetails);
//  update book
router.put("/book/update", bookFunction.updateBook);
//delete book
router.delete("/book/delete:noteID", bookFunction.deleteBook);
// save book
router.post("/book/save", bookFunction.InsertBook);

module.exports = router;
