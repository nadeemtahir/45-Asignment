//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magician(magicians:string[]): void{
    for(let magician of magicians){
        console.log(magician);
    }
}
const magicianNames:string[]=["Penn jillete","Criss angel","Teller"];
show_magician(magicianNames)