class Book {
    title;
    author;
    ISBN;
    numCopies;

    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }
    get Availability() {
        return this.getAvailability();
    }

    getAvailability() {
        if (this.numCopies == 0) {
            console.log("Out of Stock");
        }
        else if (this.numCopies < 10) {
            console.log("Low Stock");
        }
        console.log("In Stock");
    }
    sell(numCopiesSold) {
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesStocked = 4) {
        this.numCopies += numCopiesStocked;
    }
}
const HungerGame = new Book("Title", "Badawi", "51511", 10);
HungerGame.Availability;