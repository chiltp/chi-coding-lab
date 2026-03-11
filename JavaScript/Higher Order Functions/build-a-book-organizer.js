/*
Write a function that takes in an array of book objects and a year, and returns a new array of books that were released on or before the given year, sorted by release year in ascending order. Each book object has the following properties: title, authorName, and releaseYear.
*/

const books = [
    {
        title: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        releaseYear: 1925
    },
    {
        title: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        releaseYear: 1960
    },
    {
        title: "Of Mice and Men",
        authorName: "John Steinbeck",
        releaseYear: 1937
    },
    {
        title: "1984",
        authorName: "George Orwell",
        releaseYear: 1949
    },
    {
        title: "The Catcher in the Rye",
        authorName: "J.D. Salinger",
        releaseYear: 1951
    },
    {
        title: "Brave New World",
        authorName: "Aldous Huxley",
        releaseYear: 1932
    }
];

// Function to sort books by release year in ascending order
function sortByYear(firstBook, secondBook) {
    if (firstBook.releaseYear < secondBook.releaseYear) return -1;
    if (firstBook.releaseYear > secondBook.releaseYear) return 1;
    return 0;
}

// Function to get books released on or before a given year, sorted by release year
function getBooksByYear(catalog, year) {
    return catalog.filter(book => book.releaseYear <= year);
}

const filteredBooks = getBooksByYear(books, 1950);
filteredBooks.sort(sortByYear);

filteredBooks.sort(sortByYear);