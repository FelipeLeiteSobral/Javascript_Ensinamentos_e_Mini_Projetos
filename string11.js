// criar funcao somar que retotna a soma de todos os multiplos de 3 a 5

//multiplos de 3
//3, 6, 9
//multiplos de 5
//5, 10, 15

// somando os multiplos

somar(5);
function somar (limite) {
    let multiplos_de_3 = 0;
    let multiplos_de_5 = 0;
    for (i=0; i<= limite; i++) {
        if(i % 3 === 0 )
        multiplos_de_3 += i;
        if(i % 5 === 0 )
        multiplos_de_5 += i;

}
console.log(multiplos_de_3 + multiplos_de_5);
}