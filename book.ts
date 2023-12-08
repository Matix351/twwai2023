interface Book {
    title: String;
    author: String;
    publicationDate: number;
}

function sumBookYears(books: Book[]): number {
    let sum = 0;
    books.forEach(book => sum += book.publicationDate);
    return sum;

}

const books: Book[] = [
 {title: "ksiazka01", author: "autor01", publicationDate: 2001},
 {title: "ksiazka02", author: "autor02,",publicationDate: 2002},
 {title: "ksiazka02", author: "autor02", publicationDate: 2003},    
];

console.log('suma lat: ' + sumBookYears(books));