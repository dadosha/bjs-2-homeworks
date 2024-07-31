class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5 > 100 ? 100 : this.state * 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        }
        this._state = state;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(book => book[type] === value);
        if (book) {
            return book;
        }
        return null;
    }

    giveBookByName(bookName) {
        let book = this.findBookBy('name', bookName);
        if (book) {
            this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
    }
}

let library = new Library();
library.addBook(new Magazine(
    "Журнал о моде",
    2024,
    100
));
library.addBook(new NovelBook(
    "Лев Толстой",
    "Война и мир",
    1867,
    1000
));
library.addBook(new FantasticBook(
    "Лю Цысин",
    "Задача трех тел",
    2006,
    250
));
library.addBook(new DetectiveBook(
    "Артур Конан Дойл",
    "Шерлок Холмс",
    1919,
    400
));

console.log(library.findBookBy('releaseDate', 1919));
getBook = library.giveBookByName('Война и мир');
console.log(getBook, getBook.state);
getBook.state = 50;
console.log(getBook.state);
getBook.fix();
console.log(getBook.state);
library.addBook(getBook)
console.log(library);

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, lesson) {
        if (2 <= mark && mark <= 5) {
            if (this.marks.hasOwnProperty(lesson)) {
                this.marks[lesson].push(mark);
            } else {
                this.marks[lesson] = [mark];
            }
        }
    }

    getAverageBySubject(lesson) {
        if (this.marks.hasOwnProperty(lesson)) {
            return this.marks[lesson].reduce((acc, mark) => acc + mark / this.marks[lesson].length, 0);
        }
        return 0
    }

    getAverage() {
        let lessons = Object.keys(this.marks);
        if (lessons.length === 0) {
            return 0
        }
        let sumAverage = 0;
        for (let lesson of lessons) {
            sumAverage += this.getAverageBySubject(lesson);
        }
        return sumAverage / lessons.length;
    }
}