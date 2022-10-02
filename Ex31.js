
var users = ["Faiza admin","Wajeeha admin","Umair admin","John admin","Tom admin"]
for(var i=0; i<users.length; i++) {
if(users[i] == "Faiza admin" || users[i] == "Wajeeha admin" || users[i] == "Umair admin" || users[i] == "John admin" || users[i] == "Tom admin"){
    console.log("Hello " + users[i])
}
else{
    console.log("Hello User Thank You For Logging in")


}
  }

console.log("I Remove All User Now!")
  users = []
  if(users.length==0){
      console.log("We need to Find Some User")
  }
