function make_album(name,albumtitle,tracks){
    let information = {
        artist_name:name,
        title:albumtitle,
        track:tracks
    }
    return information
}
console.log(make_album("Dance-Pop","Alanis",12))
console.log(make_album("Annette Funicello","Teen pop",""))
console.log(make_album("Boz Scaggs","William Royce Scaggs",""))
