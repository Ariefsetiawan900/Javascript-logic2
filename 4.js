const library = [
  { title: "A", author: "ONE", status: false },
  { title: "B", author: "TWO", status: true },
  { title: "C", author: "THREE", status: false }
];

// Soal A
function findBookStatus(bookTitle) {
  let book = library.find(book => book.title == bookTitle);
  if (book.status == true) {
    return console.log("Book of " + book.title + " is AVAILABLE");
  } else {
    return console.log("Book of " + book.title + " is NOT AVAILABLE");
  }
}

findBookStatus("A");

// Soal B
function findBooksAvailability(boolean) {
  for (const props of library) {
    if (props.status == boolean) console.log(props);
  }
}

findBooksAvailability(true);