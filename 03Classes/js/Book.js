const Book = class {
    constructor(title, noPages, publisher, isbn, author, genre) {
        this.title = title;
        this.noPages = noPages;
        this.publisher = publisher;
        this.isbn = isbn;
        this.author = author;
        this.genre = genre;
    }
}

export default Book;