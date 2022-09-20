class Player {
    static description = "Player In Our game"
    #score = 0;
    #numLives = 10;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    getScore() {
        return this.#score;
    }
    set score(newScore) {
        if(newScore <0) {
            throw new Error("Score must be positive")
        } 
        this.#score = newScore;
    }

    set fullName(newName) {
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }

    static randomPlayer() {
        new Player("Andy", "Samberg");
    };

    get score() {
        return this.#score;
    }

    updateScore(newScore) {
        this.#score = newScore;
    }

    taunt() {
        console.log("booyah!")
    }

    loseLife() {
        this.#numLives -= 1;
    }

    get fullName() {
        return `${this.first} ${this.last}`
    }
}

class AdminPlayer extends Player {
    constructor(first, last, powers) {
        super(first, last);
        this.powers = powers
    }
    isAdmin= true;
}

const admin = new AdminPlayer("admin", "mCadmin", ["delete", "Restore world"]);

const player1 = new Player("blue", "steele");
// player1.taunt();
// console.log(player1);
// console.log(player1.score)

// console.log(player1.);
// player1.loseLife();
// console.log(player1.numLives);
// console.log(player1.updateScore(28));
// console.log(player1.getScore());
// console.log(player1.fullName)
// player1.score = 33;
// console.log(player1.score)

console.log(player1.fullName)
player1.fullName = "Amy Adams";
console.log(player1.fullName)



const player2 = new Player("charlie", "brown");

// player2.taunt();
// console.log(player2.last)