console.log("oh No I Can only Invite Two People for Dinner")
var popped = mydinner_guests.splice(1,3);
for(var i=0; i<mydinner_guests.length; i++){
 console.log(mydinner_guests[i]+" Are Still My Guest");
}



console.log("Dinner Over")
mydinner_guests.splice(0, mydinner_guests.length);
console.log(mydinner_guests)