verificar_velocidade(95)
function verificar_velocidade(velocidade){
    const velocidade_maxima = 70;
    const Km_por_ponto = 5;
    if (velocidade <= 70)
        console.log("okay");
    else {
        const pontos = Math.floor(((velocidade - velocidade_maxima) /5));
        if(pontos >= 12)
            console.log("carteira suspensa");
        else
        console.log("pontos", pontos);
    }
}