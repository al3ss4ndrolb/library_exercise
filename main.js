const myLibrary = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: true },
  { title: "The Idiot", author: "Fyodor Dostoevsky", pages: 659, read: false },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks(); // Update the display when a new book is added
}

// Function to display books in the table
function displayBooks() {
  const tableBody = document.querySelector(".books-table tbody");
  tableBody.innerHTML = ""; // Clear the table before adding rows

  myLibrary.forEach((book) => {
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

    // Append cells to the row
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

// Initial display of books
displayBooks();
