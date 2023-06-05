// const {calcularSoma}= require('./cálculos')
var assert = require('assert');

//adição
assert(calcularSoma(1,5)== 6 )
assert(calcularSoma(8,-1)== 7 )
assert(calcularSoma(400,600)== 1000)
assert(calcularSoma(0,0)== 0 )
assert(calcularSoma(0,-3)== -3 )

//subtração
assert(calcularSubtracao(1,2)==-1)
assert(calcularSubtracao(8,10)==-2)
assert(calcularSubtracao(10000,2000)==8000)
assert(calcularSubtracao(0,0)==0)
assert(calcularSubtracao(3,0)==3)

//divisão
assert(calcularDivisao(5,5)==1)
assert(calcularDivisao(500,1000)==0,5)
assert(calcularDivisao(2.5,1)==2.5)
assert(calcularDivisao(2.5,1.5)==1,666666667)
assert(calcularDivisao(5,0)=='não é possivel dividir por zero')
assert(calcularDivisao(2.5,0.5)==5)

//multiplicação
assert(calcularMultiplicacao(5,5)==25)
assert(calcularMultiplicacao(500,1000)==500000)
assert(calcularMultiplicacao(10,1)==10)
assert(calcularMultiplicacao(2.5,0.5)==1.25)
assert(calcularMultiplicacao(10,10)==100)

//potência
assert(calcularPotencia(5,2)==25)
assert(calcularPotencia(500,2)==250000)
assert(calcularPotencia(10,2)==100)
assert(calcularPotencia(-5,2)==-25)
assert(calcularPotencia(2.5,2)==6.25)

//raiz
assert(calcularRaiz(25)==5)
assert(calcularRaiz(9)==3)
assert(calcularRaiz(144)==12)
assert(calcularRaiz(-25)=='Não existe raiz')
assert(calcularRaiz(81)==9)

//par e impar
assert(calcularParImpar(5)=='É ímpar')
assert(calcularParImpar(2)=='É par')
assert(calcularParImpar(1)=='É ímpar')
assert(calcularParImpar(9)=='É ímpar')
assert(calcularParImpar(301)=='É ímpar')
assert(calcularParImpar(400)=='É par')

//fatorial
assert(calcularfatorial(5)==120)
assert(calcularfatorial(3)==6)
assert(calcularfatorial(0)==1)
assert(calcularfatorial(2)==2)

//primo
assert(calcularPrimo(2)=='é primo')
assert(calcularPrimo(25)=='não é primo')
assert(calcularPrimo(7)=='é primo')
assert(calcularPrimo(3)=='é primo')
assert(calcularPrimo(30)=='não é primo')