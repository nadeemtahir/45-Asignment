"use strict";
//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// creating a Array.
let guestList = ["Ayesha", "Komal", "Eman", "Shanzy"];
//making variable for those who cant come.
let dontCome = guestList[0];
//print the name of guest who cant come.
console.log(dontCome, "you can't make for dinner.");
//Add or remove guest from guestList aray.
guestList.splice(0, 1, "Shafak");
//Message for bigger table.
console.log("Good news! we have found a bigger table for dinner.");
//Adding a new guest starting index of array.
guestList.unshift("Samar");
//Adding a new value at ending index of array.
guestList.push("Zain");
//Get a middle index of array.
let middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest at middle index of array.
guestList.splice(middleIndex, 0, "Alveena");
//print message of updated list.
console.log("updated list of our guests.");
//sending a invitation message to our guest one by one with their names.
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me.`));
//inform that only two guest are invited for dinner.
console.log("Unfortunately, the new dinner table wont arrive on a time, so i can invite only two guests to dinner with me.");
//using while loop to remove guest from the array or untill only two names remain.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest} I cant invite you to dinner.`);
}
;
//sending a invitation for the last two guests on the list.
console.log("Invitation for the last two guest.");
guestList.forEach(lastTwo => console.log(`luckily ${lastTwo} you are still invited for a dinner.`));
//removing last two guests from the list.
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
