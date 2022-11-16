// Operadores aritmeticos (matematicos)
// Operadores de atribuição
// Operadores de comparação
// Operador ternário
// Operadores Logicos
// Operadores 



// Operadores Aritmeticos
////let salario = 100;

// +, -, *, /, **

////console.log(salario+salario);
////console.log(salario-salario);
////console.log(salario*salario);
////console.log(salario/salario);
////console.log(5**5);''

// ++ --

////let idade = 18

////console.log(idade++);
////console.log(idade);
////console.log(++idade);
////console.log(--idade);



// Operadores de atribuição
let pc_gamer = 2200;
pc_gamer += pc_gamer; // pc = pc + pc
console.log(pc_gamer);




//Operadores de igualdade

//Igualdade Restrita
console.log(1===1); //comparando valores e tipo (numero 1, type number)
console.log("1"===1);

//Igualdade Solta
console.log(1==1);
console.log("1"==1);



// Operador Ternário (comparações sem muitos if, if, if...)

// Tem um cliente com + de 100 pontos = premium  // cliente com menos que 100 = comun
let pontos = 101;
let tipo = pontos > 100 ? "premium" : "comum";
console.log(tipo);



// Operadores Lógicos and(&&), or(||), not
// (&&) Retorna TRUE se os dois operandos forem TRUE
// (||) Retorna TRUE se um dos operandos forem TRUE
// (!) Retorna TRUE se apenas um dos operandos forem TRUE
console.log(false && false);
console.log(true && true);

let maior_de_idade = false;
let tem_carteira_de_trabalho = true;
let pode_aplicar = maior_de_idade && tem_carteira_de_trabalho;
let pode_aplicar1 = maior_de_idade || tem_carteira_de_trabalho
let nao_pode_aplicar = !pode_aplicar
let impossivel_de_aplicar = !pode_aplicar1 

console.log("pode aplicar ", pode_aplicar);
console.log("não pode aplicar", nao_pode_aplicar);
console.log("impossivel de aplicar", impossivel_de_aplicar);







