


let somar = document.getElementById('somar') //
let subtrair = document.getElementById('subtrair')//
let dividir = document.getElementById('dividir')//
let multiplicar = document.getElementById('multiplicar')//
let exponenciar = document.getElementById('exponenciar')
let par = document.getElementById('par')
let raiz = document.getElementById('raiz')//
let primo = document.getElementById('primo')
let fatorar = document.getElementById('fatorar')
let resultado = document.getElementById('resultado')
let ida = document.getElementById('a')
let idb = document.getElementById('b')
let idd = document.getElementById('d')

function limpar(){
    ida.value=''
    ida.focus()    
}
function limparD(){
    idd.value=''
    idd.focus()   
}

function soma(){
let a =Number(ida.value )
let b = Number(idb.value)
if(isNaN(a)||isNaN(b))
{
    resultado.textContent= 'Não é permitido texto'
   limpar()                
    return
}
  resultado.textContent= calcularSoma(a,b)
}


function subtrai(){
    let a =Number(ida.value )
    let b = Number(idb.value)
    if(isNaN(a)||isNaN(b))
    {
        resultado.textContent= 'Não é permitido texto'
        limpar()
        return
    }
   

        resultado.textContent= calcularSubtracao(a,b)

}
function multiplica(){
    let a =Number(ida.value )
    let b = Number(idb.value)
    if(isNaN(a)||isNaN(b))
    {
        resultado.textContent= 'Não é permitido texto'
        limpar()
        return
    }
     

        resultado.textContent= calcularMultiplicacao(a,b)

}
function divide(){
    let a =Number(ida.value )
    let b = Number(idb.value)
    if(isNaN(a)||isNaN(b))
    {
        resultado.textContent= 'Não é permitido texto'
        limpar()
        return
    }
    if(a==''||b==''){
        resultado.textContent= '0 não é divisivel/divisor'
        limpar()
        return
    }
        

        resultado.textContent= calcularDivisao(a,b)

}
function quadrada(){
    let d =Number(idd.value )
  
    if(isNaN(d))
    {
        resultado.textContent= 'Não é permitido texto'
        limparD()
        return
    }
    if(d==''){
        resultado.textContent= 'Não é permitido deixar o campo vazio'
        limparD()
        return
    }
    

        resultado.textContent= calcularRaiz(d)

}
function parImpar(){
    let d =Number(idd.value )
    if(isNaN(d))
    {
        resultado.textContent= 'Não é permitido texto'
        limparD()
        return
    }
    if(d==''){
        resultado.textContent= 'Não é permitido deixar o campo vazio'
        limparD()
        return
    } 
    resultado.textContent= calcularParImpar(d)
}

function nprimo(){
    let d =Number(idd.value )
    if(isNaN(d))
    {
        resultado.textContent= 'Não é permitido texto'
        limparD()
        return
    }
    if(d==''){
        resultado.textContent= 'Não é permitido deixar o campo vazio'
        limparD()
        return
    }
    if(d<=1){
        resultado.textContent= 'Não é permitido valores menores que 2'
        limparD()
        return
    }


        resultado.textContent= calcularPrimo(d)
}
function potencia(){
        let a =Number(ida.value )
    let b = Number(idb.value)
    if(isNaN(a)||isNaN(b))
    {
        resultado.textContent= 'Não é permitido texto'
        limpar()
        return
    }
   
    resultado.textContent= calcularPotencia(a,b)
    }

    function fatoração() {
        let d =Number(idd.value )
        if(isNaN(d))
        {
            resultado.textContent= 'Não é permitido texto'
            limparD()
            return
        }
        if(d==''){
            resultado.textContent= 'Não é permitido deixar o campo vazio'
            limparD()
            return
        }

        resultado.textContent= calcularfatorial(d)
        
    }


somar.addEventListener('click', soma)
subtrair.addEventListener('click', subtrai)
multiplicar.addEventListener('click', multiplica)
dividir.addEventListener('click', divide)
raiz.addEventListener('click', quadrada)
par.addEventListener('click', parImpar)
primo.addEventListener('click', nprimo)
exponenciar.addEventListener('click', potencia)
fatorar.addEventListener('click',fatoração)
