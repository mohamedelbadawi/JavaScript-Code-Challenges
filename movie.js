class Movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }
    getOverview() {
        console.log(`${this.title},a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear},It received a rating of ${this.rating}`);
    }
    get Overview() {
        return this.getOverview();
    }
}

const movie = new Movie("Spider man", "Badawi", "Action-superheros", 2021, 4.5);
movie.Overview;