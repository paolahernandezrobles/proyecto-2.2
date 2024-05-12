function verificar(){
    var aciertos =  0;


//respuesta 1era//
if(document.getElementById('pregunta1_contable').checked)aciertos++;


//respuesta 2//
if(document.getElementById('pregunta2_incontable').checked)aciertos++;



//respuesta 3//
if(document.getElementById('pregunta3_incontable').checked)aciertos++;


//respuesta 4//
if(document.getElementById('pregunta4_contable').checked)aciertos++;



//respuesta 5//
if(document.getElementById('pregunta5_incontable').checked)aciertos++;

//respuesta 6//
if(document.getElementById('pregunta6_incontable').checked)aciertos++;

//respuesta 7//
if(document.getElementById('pregunta7_contable').checked)aciertos++;



//respuesta 8//
if(document.getElementById('pregunta8_contable').checked)aciertos++;


if(aciertos==8){
    document.getElementById("mensaje").innerHTML = "¡Felicidades! Todas tus respuestas son correctas :)"
}


document.getElementById("resultado").innerHTML = "Tuviste " +  aciertos + "  aciertos";

}