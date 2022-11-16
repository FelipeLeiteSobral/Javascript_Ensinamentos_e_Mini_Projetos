// Verbo + sSubstantivo
let cor_site = "azul"
function reseta_cor (cor){
    cor_site = cor;
}; // Essa será a função de um reset de cor

console.log(cor_site);
reseta_cor("vermelho");
console.log(cor_site)

// incrementando tonalidade

let corsite = "azul"
function resetacor (cor, tonalidade){
    corsite = cor + " " + tonalidade;
};

console.log(corsite);
resetacor("vermelho", "claro");
console.log(corsite)

// exercicio (retornar para p primeiro numero escolhido pelo usuario)

let idade = 5;
let idade2 = 6;
function reseta_idade(numero){
    idade2 = idade
};

console.log(idade,idade2);
reseta_idade();
console.log(idade, idade2);
