let ordincal_number = [1,2,3,4,5,6,7,8,9]

for(var i =0;i<ordincal_number.length;i++){
   if(ordincal_number[i]===1 ){
       console.log(ordincal_number[i]+"st")
   }
   else if(ordincal_number[i]===2 ){
    console.log(ordincal_number[i]+"nd")
   }
   else if(ordincal_number[i]===3){
    console.log(ordincal_number[i]+"rd")
   }
   else{
    console.log(ordincal_number[i]+"th")
   }

}