exports.Book = class Book {
  constructor(
    bookId,
    bookTitle,
    isbn,
    bookDescription,
    bookAuthor,
    bookPublisher,
    bookPages
  ) {
    this.bookId = bookId;
    this.bookTitle = bookTitle;
    this.isbn = isbn;
    this.bookDescription = bookDescription;
    this.bookAuthor = this.bookAuthor;
    this.bookPublisher = this.bookPublisher;
    this.bookPages = this.bookPages;
  }
};
