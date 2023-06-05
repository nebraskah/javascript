/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
import Laptop from "./Laptop.js";
import Book from "./Book.js";

const everydayPack = new Backpack("Thule Backpack",25,"blue",15,26,26,false);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const daddysLaptop = new Laptop("Dell", "G3", 32, 256, 15.6, "i5", new Date("January 7, 2021").toDateString());
const mommysLaptop = new Laptop("HP", "Latitude", 16, 256, 15.6, "i3", new Date("December 5, 2018").toDateString());
console.log("Daddy's laptop", daddysLaptop);
console.log("Mommy's laptop", mommysLaptop);
console.log("Daddy's laptop age:", daddysLaptop.laptopAge());
console.log("Mommy's laptop age:", mommysLaptop.laptopAge());

const pragmaticProgrammer = new Book("The Pragmatic Programmer", 512, "Cengage Learning", 138525468542, "Dave Watershed", "Academic");
const fantasticFive = new Book("The Fantastic Five", 385, "Bumbee Publishers", 108546352147, "Enid Blyton", "Fictional");

console.log("Domingos' book",pragmaticProgrammer);
console.log("Diego's book",fantasticFive);