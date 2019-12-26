var time= new Date();
var color;
var myElement;

if(time==12){
    color="red";
}
else if(time==15){
    color="green";
}
else {
    color="blue";
}
document.getElementById("timecolor").innerHTML=color;
