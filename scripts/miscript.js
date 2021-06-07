

function toggleBloque(){
    var demo= document.getElementById("demo");
    var operaciones= document.getElementById("operacionesContenedor");  
    
    if (operaciones.style.display === "none"){
        demo.textContent = "Ocultar operaciones"
        operaciones.style.display="block"

    }else{
        demo.textContent = "Mostrar operaciones"
        operaciones.style.display="none"
    }

}

function sumar(a, b){
    var x=document.getElementById('myNumber1').valueAsNumber;
    var y=document.getElementById('myNumber2').valueAsNumber;
    var sum=0;
    sum = x + y ;
    imprimirResultado("suma",sum);
}

function restar(a, b){
    var x=document.getElementById('myNumber1').valueAsNumber;
    var y=document.getElementById('myNumber2').valueAsNumber;
    var dif=0;
    dif = x - y ;
    imprimirResultado("resta",dif);

}function multiplicar(a, b){
    var x=document.getElementById('myNumber1').valueAsNumber;
    var y=document.getElementById('myNumber2').valueAsNumber;
    var prod=0;
    prod = x * y ;
    imprimirResultado("multiplicacion",prod);
}


  function imprimirResultado(operacion, resultado){
       document.getElementById('result').textContent = "La " + operacion + " es " + resultado;
    }

function validarVacios(resultado,operacion) {
    if(!isNaN(resultado)) {
        imprimirMensaje(operacion,resultado);
    } else {
        document.getElementById('result').textContent = "Debe ingresar valores numericos";
    }
}
