//Q24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

//• Tests for equality and inequality with strings.
let string1 : string = "Capsicum";
let string2 : string = "Brainjal";
console.log(string1 === string2);
console.log(string1 !== string2);

//• Tests using the lower case function.
let mixedCasesString : string ="Hello World";
console.log(mixedCasesString.toLowerCase() === "helloworld");
console.log(mixedCasesString.toLowerCase() === "hello world");

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
let num1 : number =15 ;
let num2 : number = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//• Tests using "and" and "or" operators.
const condition1 : boolean = true;
const condition2 : boolean = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

//• Test whether an item is in a array.
const fruits : string[]= ["Apple","Mango","Banana","Grapes"];
console.log(fruits);

//• Test whether an item is not in a array.
const fruitsName : string[]= ["Apple","Mango","Banana","Grapes"];
console.log(fruits.includes("Apple"));
console.log(fruits.includes("apple"));