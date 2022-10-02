var current_users = ["Faiza","Wajeeha","Umair","Tom","John"]
var new_users = ["Vanessa","John","Maheen","Zunaira","Faiza"]

function getMatch(a, b) {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
        

    }
    if(a[i]!==b[e]){
        console.log("user Available")
    }
    console.log(matches.join(", ")+" Are Already Registered")
    
    
}

getMatch(current_users, new_users); 
