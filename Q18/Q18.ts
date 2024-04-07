//18.Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


//making a array of countries.
let countriesToVisit:string[]=["China","Denmark","Brazil","Argentina"];

//Print its original order.
console.log("original order:", countriesToVisit);

//print the array in alphabetical order without modifying the actual array list.
console.log("Alphabetical order:", [...countriesToVisit].sort());

//show that the array is in original oder.
console.log("still in original order:",countriesToVisit );

//print the array in reversed order wiothout modifiying the actual array list.
console.log("reverse order:", [...countriesToVisit].reverse());

//show that the array is in original oder.
console.log("still in original order:",countriesToVisit );

//show that the array is in original oder.
console.log("still in original order:",countriesToVisit );

//print the array to show that it's back to iots original order. 
console.log("back to original order:", countriesToVisit.reverse());

//print the array to show that its order has been changed in alphabetical order now.
console.log("sorted in alphabetical order:", countriesToVisit.sort());

//we have changed again the original prder now in reverse prder again.
console.log("original array reverse again:",countriesToVisit.reverse() );
