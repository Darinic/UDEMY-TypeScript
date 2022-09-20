// const nums:number[] = [];

// const nums1:Array<number> = [];

// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// inputEl.value = "Hacked"

// const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any):any {
//     return item;
// }

interface Cat {
  name: string;
  breed: string;
}

function identity<Type>(item: Type): Type {
  return item;
}

identity<string>("Hello");

// identity<Cat>({ name: "Mimi", breed: "Persian" });

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([1, 2, 3, 4, 5]));

const x = 23;

getRandomElement(["a", "v", "asd"]);

function merge<T extends object,U extends object>(object1: T, object2: U) {
  return { ...object1, ...object2 };
}

// const comboObj = merge({name: 'colt'}, {pets: ["blue", "elton"]})

const comboObj = merge<{name: string}, {pets: string[]}>({name: 'colt'}, {pets: ["blue", "elton"]})

console.log(merge({name: "Colt"}, {num: 9}));

interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(item: T): number {
        return item.length * 2;
}

printDoubleLength('HelloWorld');
// printDoubleLength(25425); // error

function makeEmptyArray<T = number>(): T[] {
    return [];
};

const strings  = makeEmptyArray<string>();
strings.push('fasfasf');
// strings.push(241) // error


interface Song {
    title: string;
    artist: string;
};

interface Video {
    title: string;
    creator: string;
    resolution: string;
};

// class VideoPlaylist{
//     public videos: Video[] = [];
// }

// class SongPlaylist {
//     public songs: Song[] = [];
// }

class Playlist<T> {
    public queue: T[] = [];
    add(item: T) {
        this.queue.push(item);
    }
}

const songs = new Playlist<Song>();
songs.add({title: 'Hello', artist: 'Adele'});

const video = new Playlist<Video>();
video.add({title: 'Hello', creator: 'Adele', resolution: '1080p'});


/////////////////TYPE NARROWING////////////////////

//TYPE ALIASES////////////

function triple(value: number | string) {
    if(typeof value === 'number') {
        return value * 3;
    } else {
        return value.repeat(3);
    }
}
// TRUTHY GUARDS //////////
const el =document.getElementById("idk");

if(el) {
    el.innerText = "Hello";
} else {
    console.log("No element found");
}

const printLetters = (word?: string) => {
    if(word) {
        for(let char of word) {
            console.log(char);
        }
    } else {
        console.log("No word provided");
    }
};
// IN TYPE GUARDS //////////
function someDemo(x: string | number, y: string | boolean) {
    if(x === y) {
        x.toUpperCase()
    }
};

interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
};

function getRunTime(media: Movie | TVShow) {
    if("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}

console.log(getRunTime({title: "Amadeus", duration: 140}));
console.log(getRunTime({title: "Spongebob", numEpisodes: 80, episodeDuration: 30}));

//INSTACEOF////////

function printFullDate(date: Date | string) {
    if(date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toDateString());
    }
};

class User {
    constructor(public username: string) {}

}

class Company {
    constructor(public name: string) {}

}

function printName(entity: User| Company) {
  if(entity instanceof User) {
    entity.username
  } else {
    entity.name
  }
};
//PREDICATE FUNCTIONS//////////
interface Cat {
    name: string,
    numLives: number
};

interface Dog {
    name: string,
    breed: string
};

function isCat(animal: Cat | Dog): animal is Cat{
    return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
    if(isCat(animal)) {
        animal
        return "Meow";
    } else {
        return "Woof";
    }
}

///Discriminated Unions////////////////////

interface Rooster {
    name: string;
    weight: number;
    age: number;
    __type: "rooster";
};

interface Cow {
    name: string;
    weight: number;
    age: number;
    __type: "cow";
};

interface Pig {
    name: string;
    weight: number;
    age: number;
    __type: "pig";
}

type FarmAnimal = Rooster | Cow | Pig;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.__type) {
        case "cow":
            return "Moo";
        case "rooster":
            return "Cock-a-doodle-doo";
        case "pig":
            return "Oink";
        default:
            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck;
    }

}

const stevie: Rooster = {
    name: "Stevie chicks",
    weight: 2,
    age: 1.5,
    __type: "rooster"
};

console.log(getFarmAnimalSound(stevie));