//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


// creating a Array.
let guestList:string[]=["Ayesha","Komal","Eman","Shanzy"];

//making variable for those who cant come.
let dontCome = guestList[0];

//print the name of guest who cant come.
console.log(dontCome, "you can't make for dinner.");

//Add or remove guest from guestList aray.
guestList.splice(0, 1, "Shafak");

//Message for bigger table.
console.log("Good news! we have found a bigger table for dinner.")

//Adding a new guest starting index of array.
guestList.unshift("Samar");

//Adding a new value at ending index of array.
guestList.push("Zain");

//Get a middle index of array.
let middleIndex: number =Math.floor(guestList.length / 2);

//Adding a new guest at middle index of array.
guestList.splice(middleIndex, 0, "Alveena");

//print message of updated list.
console.log("updated list of our guests.");

//sending a invitation message to our guest one by one with their names.
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me.`));