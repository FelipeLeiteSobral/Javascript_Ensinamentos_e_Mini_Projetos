// Operadores booleanos
// Falsy (undefined, null, 0, false, "", Nan - Not A Number)
// Truthy (not Falsy)

let cor_personalizada = "";
let cor_padrao = "azul";
let cor_perfil = cor_personalizada || cor_padrao;

console.log(cor_perfil);

