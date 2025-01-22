function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    if (this.read === true) {
      return `${this.title} by ${this.author}, ${this.pages}, read`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages}, not read yet`;
    }
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const theIdiot = new Book("The Idiot", "Fyodor Dostoevsky", 659, true);

console.log(theHobbit.info());
