"use strict";
// class Player {
//     public readonly first: string;
//     public readonly last: string;
//     private score: number = 0;
//     constructor(first : string, last: string) {
//         this.first = first;
//         this.last = last;
//     }
//     secretMethod():void {
//         console.log('SECRET METHOD!!!')
//     }
// };
// shortcut for the above
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // public readonly first: string;
        // public readonly last: string;
        this._score = 0;
    }
    secretMethod() {
        console.log("SECRET METHOD!!!");
    }
    get fullName() {
        return this.first + ' ' + this.last;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Score cannot be less than 0');
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999;
    }
}
const elton = new Player("Elton", "Steele");
// elton.first = "gage"; // Error: Cannot assign to 'first' because it is a read-only property.
elton.score = 55;
;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
const bike1 = new Bike('red');
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const jacket1 = new Jacket('Levi', 'blue');
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello!");
    }
}
;
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee('Betty', 'White', 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee('Bill', 'Billerson', 24, 1100);
console.log(bill.getPay());
// Employee 
//  -FullTimeEmployee
//  -PartTimeEmployee
