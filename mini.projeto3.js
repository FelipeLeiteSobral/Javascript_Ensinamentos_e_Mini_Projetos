//exercicio nota escolar
//obter a media a partir de um array

// 0-59: F
// 90-69: D
// 70-79: C
// 80-89 : B
// 90-100: A
const array = [90,70,80];
// 75

console.log(media_do_aluno(array));

function media_do_aluno(notas) {
    let soma = 0;
    for (let nota of notas){
        soma += nota;
    }

    const media = soma/(notas.length);

    if (media < 59) return "F";
    if (media < 69) return "D";
    if (media < 79) return "C";
    if (media < 89) return "B";
    else
    return "A"
}

 function calcular_media(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
}
    return soma/(array.length);
}