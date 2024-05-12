function simetricos(){

   var numeroC = document.getElementById ('prefijos').value;
   var nomenclaura = document.getElementById('resultado');

   const  nombres ={
      1:'  metanoico',
      2:'  etanoico',
      3:'  propanoico',
      4:'  butanoico',
      5:'  pentanoico',
      6:'  hexanoico',
      7:'  heptanoico',
      8:'  octanoico',
      9:'  nonanoico',
      10:' decanoico',
   };
   let anhidrido;
   if(nombres[numeroC]){
      anhidrido= 'Anhidrido'+   nombres[numeroC].toLowerCase();
   }
  resultado.textContent= anhidrido;
}


function asimetricos(){

   var numeroC1 = document.getElementById ('numero1').value;
   var numeroC2 = document.getElementById ('numero2').value;
   var res = document.getElementById ('resultados');

   const  prefijos ={
      1:'  metanoico',
      2:'  etanoico',
      3:'  propanoico',
      4:'  butanoico',
      5:'  pentanoico',
      6:'  hexanoico',
      7:'  heptanoico',
      8:'  octanoico',
      9:'  nonanoico',
      10:' decanoico',
   };


var nombre1 = prefijos[numeroC1];
var nombre2 = prefijos[numeroC2];

 var nombrecompleto =  "  Anhidrido"+ nombre1 + nombre2 ;

 resultados.innerText= nombrecompleto;

}
