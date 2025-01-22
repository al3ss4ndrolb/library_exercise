const myLibrary = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: true },
  { title: "The Idiot", author: "Fyodor Dostoevsky", pages: 659, read: false },
];

function Book() {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
}

myLibrary.forEach((book) => {
  console.log(book);
});
