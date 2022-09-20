"use strict";
// const nums:number[] = [];
// const nums1:Array<number> = [];
// const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// inputEl.value = "Hacked"
// const btn = document.querySelector<HTMLButtonElement>(".btn")!;
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
identity("Hello");
// identity<Cat>({ name: "Mimi", breed: "Persian" });
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([1, 2, 3, 4, 5]));
const x = 23;
getRandomElement(["a", "v", "asd"]);
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
// const comboObj = merge({name: 'colt'}, {pets: ["blue", "elton"]})
const comboObj = merge({ name: 'colt' }, { pets: ["blue", "elton"] });
console.log(merge({ name: "Colt" }, { num: 9 }));
function printDoubleLength(item) {
    return item.length * 2;
}
printDoubleLength('HelloWorld');
// printDoubleLength(25425); // error
function makeEmptyArray() {
    return [];
}
;
const strings = makeEmptyArray();
strings.push('fasfasf');
;
;
// class VideoPlaylist{
//     public videos: Video[] = [];
// }
// class SongPlaylist {
//     public songs: Song[] = [];
// }
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(item) {
        this.queue.push(item);
    }
}
const songs = new Playlist();
songs.add({ title: 'Hello', artist: 'Adele' });
const video = new Playlist();
video.add({ title: 'Hello', creator: 'Adele', resolution: '1080p' });
/////////////////TYPE NARROWING////////////////////
//TYPE ALIASES////////////
function triple(value) {
    if (typeof value === 'number') {
        return value * 3;
    }
    else {
        return value.repeat(3);
    }
}
// TRUTHY GUARDS //////////
const el = document.getElementById("idk");
if (el) {
    el.innerText = "Hello";
}
else {
    console.log("No element found");
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("No word provided");
    }
};
// IN TYPE GUARDS //////////
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
}
;
;
function getRunTime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRunTime({ title: "Amadeus", duration: 140 }));
console.log(getRunTime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 }));
//INSTACEOF////////
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toDateString());
    }
}
;
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity.username;
    }
    else {
        entity.name;
    }
}
;
;
;
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        return "Woof";
    }
}
;
;
function getFarmAnimalSound(animal) {
    switch (animal.__type) {
        case "cow":
            return "Moo";
        case "rooster":
            return "Cock-a-doodle-doo";
        case "pig":
            return "Oink";
        default:
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: "Stevie chicks",
    weight: 2,
    age: 1.5,
    __type: "rooster"
};
console.log(getFarmAnimalSound(stevie));
