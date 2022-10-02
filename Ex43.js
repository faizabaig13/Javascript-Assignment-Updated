
let magician = ["David Copperfield","Doug Henning","Lance Burton","Mark Wilson"]
function show_magicians(magicianName){
    return magicianName
}

console.log(show_magicians(magician))
function make_great(){
    for(var i =0;i<magician.length;i++){

        console.log(show_magicians(magician[i])+" are Great Magician")
    }
}
make_great()