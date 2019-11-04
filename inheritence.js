/* jshint esversion: 6 */

// CREATE BOOK OBJECT - CONSTRUCTOR
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// CREATE MAGAZINE OBJECT - CONSTRUCTOR
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Inheritance prototype methods of Book.
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1.getSummary());
console.log(mag1);
