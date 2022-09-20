let age: number | string = 213;

type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = {x:1, y:34};

coordinates = {lat:321.213, long: 23.334};

function printAge(age: number | string): void {
    console.log(`Your age is ${age}`);
}

function calculateTax(price: number | string, tax:number):number {
    // return price * tax //error
    if(typeof price === 'string') {
        price = parseFloat(price.replace('$', ''));
    }
    return price * tax;

}

const nums: number[] = [1,2,3,4];

const stuff: any[] = [1,2,3,4, 'hello', true, {name: 'bob'}];

const stuff2: (number | string)[] = [1,2,3, "hello world"];
// const stuff3: number[] | string [] = [1,2,3, 'asgfasf'] //ERROR (upper version correct)

const coords: (Point | Loc)[] = [];

coords.push({lat:321.213, long: 23.334});

//LITERAL TYPES

const zero: 0 = 0;

// zero = 2; //ERROR

let mood: "Happy" | "Sad" = "Happy";

mood = "Sad";
mood= "Happy";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let today: DayOfWeek = "Monday";