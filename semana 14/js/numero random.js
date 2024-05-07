function apostar(){
let b=101; // ingrese el ciclo while
let intentos=0 // contador
var a=Math.round(Math.random()*100)// genera numero al azar entre 0 y 100
// ciclo while
while (a!=b){
    b=parseInt(prompt("ingrese VALOR APOSTADO DE 0 A 100"));
    if(b>a){
        alert("el valor es mas bajo")
    }else{
    alert("el valor es mas alto");
}
intentos++;
}
document.getElementById("apostado").value=b;
document.getElementById("resultado").value=a;
swal("FELICITACIONES USUARIO","HAS ACERTADO EL NUMERO EXITOSAMENTE!!!","success")
document.getElementById("salida").value="HAS ACERTADO EL NUMERO A LOS"+intentos+"...intentos";
}
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}