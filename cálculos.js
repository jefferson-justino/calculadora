function calcularSoma(n1,n2){

    return n1+n2
}

function calcularSubtracao(n1,n2){

    return n1-n2
}

function calcularDivisao(n1,n2){

    return n1/n2
}

function calcularMultiplicacao(n1,n2){

    return n1*n2
}



function calcularRaiz(n1){

    return Math.sqrt(n1)
}



function calcularParImpar(n1){

    return n1%2==0 ? 'É par': 'É ímpar'
}

function calcularPrimo(n1){
    var divisores=0;
      let valor
    for(var count=1 ; count<=n1 ; count++){
     if(n1 % count == 0){
         divisores++;
         }
    if(divisores==2){
     valor='É primo';
    }
    else{
        valor= 'Não é primo';
    }
        }
     return valor;
}

function calcularfatorial(n1){
let calcular =1
   for(let i =1;i<=n1;i++)
   {
    calcular *=i
   }
   return calcular
}
function calcularPotencia(n1,n2){
    return n1**n2
}


// module.exports ={calcularSoma}