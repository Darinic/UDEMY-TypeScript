Math.round(4.7); // 5

let MyString: string = "Hello World";

MyString = "Hello World";

// MyString = 100; // Error

// MyString.upper(); // Error

let numCatLives: number = 9;

// numCatLives = "nine"; // Error

let gameOver: boolean = false;

// gameOver = "true"; // Error

gameOver = true;

let nothing: null = null;
let foo: undefined = undefined;

//TYPE INFERENCE

let tvShow = "Olive Kitteridge" ;
tvShow = "The other Two";
// tvShow = false; // Error

let isFunny = true;
// isFunny = "yes"; // Error

//

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];

let foundMovie: string;

for(let movie of movies) {
    if(movie === "Amadeus") {
        foundMovie = movie;
    }
};
