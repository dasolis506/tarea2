<script type="text/javascript">


function sumar(a, b){
    var x=document.getElementById(myNumber1).value;
    var y=document.getElementById(myNumber2).value;
    var sum=0;
    sum=Number(x)+Number(y);
    alert("SUM is: " + sum);
}


function validarVacios(resultado,operacion) {
    if(!isNaN(resultado)) {
        imprimirMensaje(operacion,resultado);
    } else {
        document.getElementById('result').textContent = "Debe ingresar valores numericos";
    }
}



</script>

