/* ----------------------------------------------------
                    Questão 2
---------------------------------------------------- */
console.log("___________________________________________")
console.log("Questão 2")
console.log("___________________________________________")

//Valor a ser analisado
var Numero = 55;

//Define os valores iniciais
var First = 0;
var Second = 1;

//Verifica se o valor é 0 ou 1
if (Numero == First || Numero == Second){
    console.log(`${Numero} é um número de Fibonacci`)
} 

//Verifica se o valor é igual aos outros numeros de Fibonacci
else{
    while(Numero > Second){
        var soma = First + Second
        var First = Second
        var Second = soma
    }
    if (Numero == Second){
        console.log(`${Numero} é um número de Fibonacci`)
    }else{
        console.log(`${Numero} não é um número de Fibonacci`)
    }
}

/* ----------------------------------------------------
                    Questão 3
---------------------------------------------------- */
console.log("___________________________________________")
console.log("Questão 3")
console.log("___________________________________________")

const Dados = require("./dados.json")
const ArrayDados = []

//adiciona todos os valores para o array
for (var i = 0; i < Dados.length; i++) {
    let valores = Dados[i].valor
    ArrayDados.push(valores)
 }

//Filtrar dias trabalhados
var semFeriados = ArrayDados.filter(SemZeros => SemZeros!= 0);

//identifica qual o maior e o menor valor
const maior = Math.max(...ArrayDados);
const menor = Math.min(...semFeriados);

//Calcula a média
var total = 0;
for (var i = 0; i < ArrayDados.length; i++) {
    total += Dados[i].valor
    var media = total/semFeriados.length
}

//Filtrar dias acima da média
var acimaMedia = ArrayDados.filter(acimaM => acimaM > media);


//Resultado
console.log(`O menor valor foi ${menor}`)
console.log(`O maior valor foi ${maior}`)
console.log(`O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi ${acimaMedia.length}`)

/* ----------------------------------------------------
                    Questão 4
---------------------------------------------------- */
console.log("___________________________________________")
console.log("Questão 4")
console.log("___________________________________________")

const SP = 67836.43
const RJ = 36678.66
const MG = 29229.88
const ES = 27165.48
const Outros = 19849.53
const Total = SP + RJ + MG + ES + Outros

function perc(x, y){
   return (x*100) / y
}

console.log(`SP representa aproximadamente ${perc(SP, Total).toFixed(2)}% do valor total`)
console.log(`RJ representa aproximadamente ${perc(RJ, Total).toFixed(2)}% do valor total`)
console.log(`MG representa aproximadamente ${perc(MG, Total).toFixed(2)}% do valor total`)
console.log(`ES representa aproximadamente ${perc(ES, Total).toFixed(2)}% do valor total`)
console.log(`Outros representa aproximadamente ${perc(Outros, Total).toFixed(2)}% do valor total`)

/* ----------------------------------------------------
                    Questão 5
---------------------------------------------------- */
console.log("___________________________________________")
console.log("Questão 5")
console.log("___________________________________________")

/* Essa função percorre toda a string retirando as ultimas 
letras uma por uma e adicionando numa nova string */
function Inverter(string) {
    var invertida = "";
    for (var i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
    }
    return invertida;
}

//Manda imprimir a string entre aspas invertida
console.log(Inverter("Olá, mundo!"))