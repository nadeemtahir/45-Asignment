//3. Name Case: Store a person's name in a variable, and then print that's person's name in lowercase, uppercase, and tittlecase.
var firstName = "Allama Iqbal";
console.log("lowercase", firstName.toLowerCase());
console.log("uppercase", firstName.toUpperCase());
console.log("tittlecase", firstName.charAt(0).toUpperCase() + firstName.slice(1));
