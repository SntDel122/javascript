function calcular(){
    var n1=document.getElementById("valorc").value; //del form al javascript
    var n2=document.getElementById("numc").value;
    var n3=document.getElementById("interes").value;
    //proceso calcular
    var valora=parseFloat(n1)*parseFloat(n2);
    var valorb=(parseFloat(n1)*(1+parseFloat(n2)*parseFloat(n3)));
    document.getElementById("valora").value=valora; //del js al form
    document.getElementById("valorb").value=valorb.toFixed(0);
}
function limpiar(){
    document.getElementById("valorc").value=""; //borrar input de entrada
    document.getElementById("numc").value="";
    document.getElementById("interes").value="";
}