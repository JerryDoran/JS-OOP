/* jshint esversion: 6 */

const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
};

// Create Object.
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2013';

console.log(book1);
