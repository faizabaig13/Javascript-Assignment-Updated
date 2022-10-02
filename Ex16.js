console.log("I found a Big table for Dinner I Decided to Invite Zunaira")
// I found a Big table for Dinner
// I Decided to Invite Zunaira
mydinner_guests.unshift("Zunaira")
for(var i=0; i<mydinner_guests.length; i++){
    console.log(mydinner_guests[i]);
   }
// John also Joining my DInner
console.log("John also Joining my DInner")
mydinner_guests.splice(2, 0, "John");

console.log("oh No I Can only Invite Two People for Dinner")
for(var i=0; i<mydinner_guests.length; i++){
    console.log(mydinner_guests[i]);
   }

 