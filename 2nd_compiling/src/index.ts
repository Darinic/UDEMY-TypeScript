interface Chicken {
    breed: string;
    eggsPerWeek: number;
    name: string;
    age: number;
};

const norma: Chicken = {
    breed: "Silkie",
    eggsPerWeek: 4,
    name: "Norma",
    age: 2
};

const juniper: Chicken = {
    breed: "Silkie",
    eggsPerWeek: 8,
    name: "Juniper",
    age: 1
};

// function doThing(thing) { 
//     console.log(thing) 
// } //ERROR - no type annotation

let users: string[] | null = ["Bob", "Sally", "Sue"];
users= null;
// users= undefined; // this is an error