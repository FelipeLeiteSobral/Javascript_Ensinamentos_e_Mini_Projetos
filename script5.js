// Condicionais lógicos (If,Else) // (Switch, case)
// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se a estiver entre 12:00 até 18:00 : Boa tarde!
// Caso contrario: Boa noite!

let horario = 19;
if(6<horario && horario<12){
    console.log("Bom dia!")
}
else if(12<=horario && horario<18)
{
        console.log("Boa tarde!")
    }
else{
        console.log("Boa noite!")
}

let permissao; //comum, gerente, diretor (ferramenta de seleção)

permissao = "gerente"

switch (permissao){
    case "comum":
        console.log("usuário comum");
        break;

    case "gerente":
        console.log("usuário gerente");
        break;

    case "diretor":
        console.log("usuario diretor");
        break;
        
    default:
    console.log("usuario desconhecido");
}