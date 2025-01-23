const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
  new Book("The Idiot", "Fyodor Dostoevsky", 659, false),
  new Book("The Catcher in the Rye", "J.D. Salinger", 277, true),
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks(); // Update the display when a new book is added
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Function to display books in the table
function displayBooks() {
  const tableBody = document.querySelector(".books-table tbody");
  tableBody.innerHTML = ""; // Clear the table before adding rows

  myLibrary.forEach((book, index) => {
    const row = document.createElement("tr");

    // Create cells for the row
    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;

    const readCell = document.createElement("td");
    readCell.textContent = book.read ? "Yes" : "No";

    const toggleReadCell = document.createElement("td");
    const toggleReadButton = document.createElement("button");
    toggleReadButton.textContent = "Toggle Read";
    toggleReadButton.addEventListener("click", () => {
      book.toggleReadStatus();
      displayBooks();
    });
    toggleReadCell.appendChild(toggleReadButton);

    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeBookFromLibrary(index);
    });
    removeCell.appendChild(removeButton);

    // Append cells to the row
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);
    row.appendChild(toggleReadCell);
    row.appendChild(removeCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

const addBtn = document.querySelector("#add-book");
const dialog = document.querySelector("#book-dialog");
const form = document.querySelector("#book-form");

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = form.elements["title"].value;
  const author = form.elements["author"].value;
  const pages = form.elements["pages"].value;
  const read = form.elements["read"].checked;

  addBookToLibrary(title, author, pages, read);
  dialog.close();
});

// Initial display of books
displayBooks();
