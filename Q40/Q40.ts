//40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function myAlbum(artistName:string, albumTittle:string){
    return{artistName,albumTittle}
}

let album1= myAlbum("The Beatless","Abbey Road");
let album2 = myAlbum("Queen","A night at the opera");
let album3 = myAlbum("Nirvana","Nevermind");


console.log(album1);
console.log(album2);
console.log(album3);

//Number of Tracks.
function myAlbum2(artistName:string,albumTittle:string,numberOfTracks?:number){
    return{artistName,albumTittle,numberOfTracks}
}

let album4 = myAlbum2("The Beatless","Abbey Road",35);
let album5 = myAlbum2("Queen","A night at the opera",40);
let album6 = myAlbum2("Nirvana","Nevermind",20);

console.log(album4);
console.log(album5);
console.log(album6);