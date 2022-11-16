//escreva uma função com dois numeros e que retorna o maior entre eles
let a=1;
let b=1;

if (a>b)
    console.log("o primeiro numero é maior que o segundo");
    else if (a=b)
    console.log("Os dois numeros sao iguais");
    else
    console.log("O segundo numero é maior que o primeiro");

let valor_maior = max(5,9);
console.log(valor_maior)

function max(numero1, numero2){
    if(numero1>numero2)
        return numero1;
    else return numero2;
}
