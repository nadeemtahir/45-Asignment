//29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favouriteFruits = ["Apple", "Mango", "Banana"];
if (favouriteFruits.includes("Apple")) {
    console.log("you really like Apple!");
}
if (favouriteFruits.includes("Orange")) {
    console.log("you really like Orange!");
}
else {
    console.log("Orange are not in your favourite fruit list.");
}
if (favouriteFruits.includes("Mango")) {
    console.log("you really like Mango!");
}
if (favouriteFruits.includes("Banana")) {
    console.log("you really like Bananas!");
}
if (favouriteFruits.includes("Grapes")) {
    console.log("you really like Grapes!");
}
else {
    console.log("Grapes are not in your favourite fruits list!");
}
