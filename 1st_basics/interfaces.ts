// type Point = {
//     x: number;
//     y: number;
// };

// const pt: Point = { x: 1, y: 2 };

interface Point {
    x: number,
    y: number,
};

const pt: Point = { x: 123, y: 234 };

interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string,
    // sayHi: () => string, alternative variant
    sayHi(): string
};

const p: Person = {id:21837 , first: 'Jane', last: 'Doe', sayHi: () => { return 'Hi'}};

p.first = "Thomas";
// p.id = 42331; // Error

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number):number
};

const shoes: Product = {
    name: "Blue suede shoes",
    price: 100,
    applyDiscount(amount:number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};

console.log(shoes.applyDiscount(0.4));

interface Dog {
    name: string;
    age: number;
};

interface Dog {
    breed: string;
    bark(): string;
};

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() { 
        return "Woof Woof!"
    }
};

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark!"
    },
    job: "guide dog"
};

interface Persona {
    name: string;
};

interface Employee {
    readonly id: number;
    email: string;
};

interface Engineer extends Persona, Employee {
    level: string,
    languages: string[]
};

const pierre: Engineer = {
    name: "Pierre",
    id: 1234,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["typescript", "javascript", "python"]
};


