// let nome = "Rafael"; //string literal (sequencia de caracteres guardado na variavel)
// let idade = 24; // number literal (numero guardado na variavel)
let esta_aprovado = true; // boolean (construir regras)
let sobrenome = undefined; // Undefined (Indefinido - Muito pouco usado)
// let cor_selecionado = null // Redefinir um valor

let pessoa = {
    nome: "Rafael",
    idade: 25,
    esta_aprovado: true,
    sobrenome: "de souza"
};

console.log(pessoa);

// arrays (conjunto de dados que pode ser acessado por um índice [0,1,2,3...])

let familia_idade = [true, 25, 15, "Felipe",58];
console.log(familia_idade[0]);
console.log(familia_idade.length);

// exercicio arrays
let nome = "Gustavo Durão";
let idade = 25;
let cidade_onde_mora = "Aracaju";
let Gustavo_Durao = [nome, idade, cidade_onde_mora];
console.log(Gustavo_Durao)