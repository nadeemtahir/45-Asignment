//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


//Exercise 11.

// let members : string[]= ["Hunaina", "Hadid","Ayesha","Bismil","Shahmeer"];

// for (let i=0; i<members.length; i++){
//     console.log(members[i]);
// };

//Exercise 12.

 let members : string[]= ["Hunaina", "Hadid","Ayesha","Bismil","Shahmeer"];
 let message: string= "How are you";
 for (let i=0; i<members.length; i++){
     console.log(message +" "+ members[i]);
};