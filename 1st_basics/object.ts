const dog = {
    name: "Elton",
    breed: "Australian shepherd",
    age: 0.5
}

function printName(person: {first: string, last: string}): void {
    console.log(person.first + " " + person.last);
}

printName({first: "John", last: "Doe"});

type Point = {
    x: number,
    y: number
}

let coordinate: Point = {
    x: 10,
    y: 20
}

function randomCoordinate(): Point {
    return {
        x: Math.random(),
        y: Math.random()
    }
}

// printName({first: "Mick", last: "Jagger", age:400}); // Error

const singer = {first: "Mick", last: "Jagger", age:400, isAlive: true}; // <-- allows to pass in extra properties

printName(singer);


function doublePoint(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2};
}

type MyNum = number;

let age: MyNum = 100;

type Song = {
    title: string, 
    artist: string, 
    numStreams: number, 
    credits: {
        producer:string, 
        writer: string
    }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`${song.title} by ${song.artist}`)
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

calculatePayout(mySong);
printSong(mySong)

type Point2 = {
    x: number,
    y: number,
    z?: number
}

const myPoint: Point2 = {x:1, y: 3} // <-- z is optional

type User = {
    readonly id: number,
    username: string;
};

const user: User = {
    id: 12837,
    username: "catgurl"
}

// user.id = 235523; // Error

//INTERSECTION TYPES

type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 10,
    color: "yellow"
};

type Cat = {
    numLives: number
};

type Dog = {
    breed: string
};

type CatDog = Cat & Dog & {
    age: number
};

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9
};
