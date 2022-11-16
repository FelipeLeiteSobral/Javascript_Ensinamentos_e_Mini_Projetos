let a = "vermelho";
let b = "azul";

console.log(a,b);

let troca = 0;
troca = a || b;
a = b || troca;
b = troca || a;


console.log(a,b);
console.log(troca);
