//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these item.

type fruitType = {
  fruitName: string,
  fruitColour: string,
  fruitQuantity: number,
  taste: string,
  isAvailable: boolean,
};

let fruitType= {
  fruitName: "mango",
  fruitColour: "yellow",
  fruitQuantity: 12,
  taste: "yummy",
  isAvailable: true,
};
 
console.log(fruitType);