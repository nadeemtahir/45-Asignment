"use strict";
//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magician(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ["Penn jillete", "Criss angel", "Teller"];
show_magician(magicianNames);
