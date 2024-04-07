"use strict";
//42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magician(magicians) {
    for (let magician of magicians) {
        console.log(magician + " " + "The Great");
    }
}
const magicianNames = ["Penn jillete", "Criss angel", "Teller"];
show_magician(magicianNames);
