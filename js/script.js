// JavaScript Basic

var myVar = 11;
if(myVar == 10){
    document.write("your variable value is "+myVar);
}
else{
    document.write("value is not 10")
}

function myFunction(){
    document.write("<br> abc")
}
myFunction();

// JavaScript Object 

var person = {
    name: "kanon",
    age : 28,
    address: "Palash Bari"
}

for( let values in person){
    document.write("<br>"+ values +" : "+ person[values])
}