// Loop do while (Do...while)
let i=5;
resultado=1;
do{
    resultado=resultado*i;
    i--;
} while(i>0)

console.log(resultado);

//Loop for in (para interar propriedade de objetos ou elementos de array)
const pessoa = {
    nome:"felipe",
    idade:24
};

for(let chave in pessoa){
    console.log(chave,pessoa["nome"],pessoa["idade"]);
}

const cores = ["Vermelho", "Azul", "Verde"];

for(let indice in cores){
    console.log(indice,cores[indice]);
}

//Loop for of ()
let numeros = [1,3,5,7,9]
for(let numero of numeros){
    console.log(numero);
}