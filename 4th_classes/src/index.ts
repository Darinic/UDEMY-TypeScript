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
  // public readonly first: string;
  // public readonly last: string;
  protected _score: number = 0;

  constructor(public first: string, public last: string) {}

  secretMethod(): void {
    console.log("SECRET METHOD!!!");
  }

    get fullName(): string {
        return this.first + ' ' + this.last;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if(newScore < 0) {
            throw new Error('Score cannot be less than 0');
        }
        this._score = newScore;
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 999999;
    }
}

const elton = new Player("Elton", "Steele");
// elton.first = "gage"; // Error: Cannot assign to 'first' because it is a read-only property.
elton.score = 55;

interface Colorful {
    color: string;
};

interface Printable {
    print(): void;
}

interface Payable {
    getPay(): number
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

const bike1 = new Bike('red');

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}

    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

const jacket1 = new Jacket('Levi', 'blue');

abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number;
    greet() {
        console.log("Hello!");
    }
};

class FullTimeEmployee extends Employee {
    constructor( first: string, last: string, private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor( first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
        super(first, last);
    }
    getPay(): number {
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