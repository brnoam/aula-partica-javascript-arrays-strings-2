//** 1)      Calcular a tabuada de multiplicar de 5.  **//

//** a) Adicionar o resultado de cada cálculo em um array. **//
//** b) Transformar o array em string. **//
//** c) Exibir no console.**//

var mult = 5

for (soma = 0; soma <11; soma ++ ) {

 var multiplicacao = [mult * soma];

 
console.log(multiplicacao.toString()) }




//** 2) Utilizar a fórmula abaixo para que converter uma temperatura de Fahrenheit para Celsius:**//

//** a) n é o valor da temperatura a ser convertida. **//
//** b) Dado o array  de temperaturas com os valores  54, 78, 56, 98, 0, 12, 11, 37  **//
//** c)       Exibir no console cada uma das temperaturas convertidas de Fahrenheit para Celsius.  **//


var temp = [54,78,56,98,0,12,11,37];
 
for (valor = 0; valor < temp.length; valor++){

    var n = temp [valor]
    var celsius = (n - 32) / 1.8
    console.log (n + " Graus Fahrenheit são " +  celsius + " em graus Celsius" ) 
}

