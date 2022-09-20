function square(num: number)  {
    // num() // Error
    return num*num;
}

square(3);
// square("asd"); // Error
// square(true); // Error

function greet(person: string) {
    return "Hello, " + person;
}

greet("John");
// greet(100); // Error

const doSomething = (person: string, age: number, isFunny: boolean) => {
}

doSomething("ChickenFace", 100, false);
// doSomething("ChickenFace", 100, "false"); // Error

function greeting(person: string = "Stranger") {
    return "Hello, " + person;
}

greeting();
greeting('Tony');
// greeting(234); // Error

//RETURN TYPE ANNOTATIONS

const addNums = (x:number, y:number): number => {
    return x + y;
}

function square2(num: number): number {
    // num() // Error
    return num*num;
}

function rando(num:number) {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

const colors = ["red", "orange", "yellow"];
colors.map(color => {
    // return color.toFixed(2) // Error
    return color.toUpperCase();
    //Typescript interprets the colors parameter as a string, that's why it errors on toFixed parameter.
});

function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
    // return "Hello"; // Error
    //Void means we are not expecting a return value.
}

function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop(): never {
    while(true) {
        console.log('game loop running')
    }
    // return true; // Error
}

