const queries = require("../db/dbquery");
const dbconnection = require("../db/dbconnection");
const util = require("../utills/utilty");

exports.getBookDetails = async function (req, res) {
  try {
    const bookId = req.params.bookId;
    let bookListDetailsQuery = queries.queryList.GET_BOOK_DETAILES_LIST_QUERY;
    let result = await dbconnection.query(bookListDetailsQuery, [bookId]);
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log("error is :" + error);
    res.status(500).send({ error: "server error can not retrive book list" });
  }
};

exports.getBookList = async function (req, res) {
  try {
    let bookListQuery = queries.queryList.GET_BOOK_LIST_QUERY;
    let result = await dbconnection.query(bookListQuery);
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log("error is :" + error);
    res.status(500).send({ error: "server error can not retrive book list" });
  }
};

exports.updateBook = async function (req, res) {
  try {
    let bookId = req.body.bookId;
    let bookTitle = req.body.bookTitle;
    let bookDescription = req.body.bookDescription;
    let bookAuthor = req.body.bookAuthor;
    let bookPublisher = req.body.bookPublisher;
    let bookPages = req.body.bookPages;
    let createdOn = new Date();
    let createdBy = req.body.createdBy;

    if (!bookId)
      return res.status(500).send({ error: "Book ID cannot be undefined" });
    if (!bookTitle || !bookAuthor)
      return res
        .status(500)
        .send({ error: "Book title and author should not be empty" });

    let values = [
      bookTitle,
      bookDescription,
      bookAuthor,
      bookPublisher,
      bookPages,
      createdOn,
      createdBy,
      bookId,
    ];
    let bookUpdateQuery = queries.queryList.UPDATE_BOOK;
    let result = await dbconnection.query(bookUpdateQuery, values);

    res.status(200).send("Book updated successfully");
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).send({ error: "Server error. Cannot update book" });
  }
};

exports.deleteBook = async function (req, res) {
  try {
    var bookId = req.params,
      bookId;
    if (!bookId)
      return res
        .status(500)
        .send({ error: "Book ID cannot be undefined so can delete anything" });
    if (!bookItem)
      return res.status(500).send({ error: "Book ID is out of range" });
    let values = [bookId];
    bookInsertQuery = queries.queryList.DELETE_BOOK;
    let result = await dbconnection.query(bookInsertQuery, values);
    res.status(200).send("deleted successfully");
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).send({ error: "Server error. Cannot update book" });
  }
};

exports.InsertBook = async function (req, res) {
  try {
    let booktitle = req.body.booktitle;
    let bookdescription = req.body.bookdescription;
    let bookauthor = req.body.bookauthor;
    let bookpublisher = req.body.bookpublisher;
    let bookpages = req.body.bookpages;
    let createdon = new Date();
    let createdby = req.body.createdby;
    if (!booktitle || !bookauthor)
      return res
        .status(500)
        .send({ error: "bookauthor and booktitle should not be empty" });

    let values = [
      booktitle,
      bookdescription,
      bookauthor,
      bookpublisher,
      bookpages,
      createdon,
      createdby,
    ];
    bookInsertQuery = queries.queryList.INSERT_BOOK;
    let result = await dbconnection.query(bookInsertQuery, values);
    res.status(201).send("new book added correctly");
  } catch (error) {
    console.log("error is :" + error);
    res.status(500).send({ error: "server error can not ADD NEW book" });
  }
};
