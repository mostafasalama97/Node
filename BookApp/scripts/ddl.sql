CREATE SCHEMA bms;


-- store
CREATE TABLE bms.Store (
  storeId serial NOT NULL,
  storeName VARCHAR(100) NOT NULL,
  storeCode VARCHAR(10) NOT NULL,
  createdOn timestamp NOT NULL,
  createdBy VARCHAR(50) NOT NULL,
  CONSTRAINT storeKey PRIMARY KEY (storeId)
);

-- book
CREATE TABLE bms.Book (
  bookId serial NOT NULL,
  bookTitle VARCHAR(255) NOT NULL,
  bookDescription TEXT NULL,
  bookAuthor VARCHAR(255) NOT NULL,
  bookPublisher VARCHAR(255) NOT NULL,
  bookPages INT NULL,
  storeCode VARCHAR(10) NOT NULL,
  createdOn timestamp NOT NULL,
  createdBy VARCHAR(50) NOT NULL,
  CONSTRAINT bookKey PRIMARY KEY (bookId)
);
