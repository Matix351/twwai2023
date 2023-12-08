function sumBookYears(books) {
    var sum = 0;
    books.forEach(function (book) { return sum += book.publicationDate; });
    return sum;
}
var books = [
    { title: "ksiazka01", author: "autor01", publicationDate: 2001 },
    { title: "ksiazka02", author: "autor02,", publicationDate: 2002 },
    { title: "ksiazka02", author: "autor02", publicationDate: 2003 },
];
console.log('suma lat: ' + sumBookYears(books));
