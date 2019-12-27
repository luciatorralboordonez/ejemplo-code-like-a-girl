/*var time= new Date();
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
*/function alerta()
{
    var mensaje;
    var opcion = confirm("¿Te gustaria suscribirte a nuestra web?");
    if (opcion == true) {
        mensaje = "Te enviaremos nuestra revista todos los meses";
	} else {
	    mensaje = "Lo sentimos, intentamos hacerlo lo mejor posible";
	}
	document.getElementById("ejemplo").innerHTML = mensaje;
}