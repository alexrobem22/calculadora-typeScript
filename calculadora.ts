
var resultado = document.getElementById('resultado')!;
var incremento = "";

function valores(valor: string){
    
    incremento += valor;

    resultado.innerHTML = incremento.toString();//tostring tranformo o paranmetro em string

}
function zerar(){

    incremento = "";
    resultado.innerHTML = "";

}
function apagar(){

     resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length - 1 );//substring eu pecorro e apago um caracter

     incremento = "";

     incremento = resultado.innerHTML;


}
function calcular(){

    if(resultado.innerHTML){

        resultado.innerHTML = eval(resultado.innerHTML); // eval ele soma as minhas estring
        incremento = "";
        incremento = resultado.innerHTML;
        resultado.innerHTML = incremento;

    }
    else{
       
        resultado.innerHTML = "valor ?";
    }
  
      
        
    


}





