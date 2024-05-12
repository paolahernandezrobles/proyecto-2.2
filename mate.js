function calcularformula () {
    var a = parseFloat (document.getElementById('a').value);
    var b = parseFloat (document.getElementById('b').value);
    var c = parseFloat (document.getElementById('c').value);

    var discriminante = Math.pow(b,2)-4*a*c;


    if (discriminante >=0){
        var x1 = (-b+ Math.sqrt(discriminante))/(2*a);
        var x2 = (-b- Math.sqrt(discriminante))/(2*a);
         
        document.getElementById('resultado').innerText= "x1 =" + x1 + " , x2 =" + x2;
    
    }

    else{
         var variableReal= -b/(2*a);
         var variableima= Math.sqrt(Math.abs(discriminante))/(2*a);
         document.getElementById('resultado').innerText = "x1 =" + variableReal + "+" + variableima + "i, x2 ="+ variableReal + "-" + variableima + "i";
    }
}