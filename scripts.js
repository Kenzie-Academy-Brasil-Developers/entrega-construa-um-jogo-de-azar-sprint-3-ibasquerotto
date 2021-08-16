const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

const escolhaComputador = () => randomNumber(0, 2)

// função random vai pegar um número entre 0, 1 e 2 

// 0 => pedra
// 1 => papel
// 2 => tesoura





function resultadoAmigavel(jogadaComputador){
    if (jogadaComputador === 0){
        return "pedra"
    }
    if (jogadaComputador === 1){
        return "papel"
    }
    if (jogadaComputador === 2){
        return "tesoura"
    }
}




//condições de vitoria
// papel > pedra > tesoura



const jogo = (escolhaJogador, jogadaComputador) => {
console.log(escolhaJogador, jogadaComputador)
    if (escolhaJogador == 0){ //pedra
        if (jogadaComputador == 1){
            return "Computador venceu"
        }
        if (jogadaComputador == 2){
            return "Você ganhou"
        }

        
        return "Empate"
        

    }

    if (escolhaJogador === 1){ //papel
        if (jogadaComputador === 2){
            return "Computador venceu"
        }
        else if (jogadaComputador === 0){
            return "Você ganhou"
        }

        else {
            return "Empate"
        }

    }

    if (escolhaJogador === 2){ //tesoura
        if (jogadaComputador === 0){
            return "Computador venceu"
        }
        else if (jogadaComputador === 1){
            return "Você ganhou"
        }

        else {
            return "Empate"
        }

    }


   
}
const jogar = () =>{
    let escolhaJogador = document.getElementById("escolhaJogador").value
    // retorna o valor escolhido na lista pelo jogador
    
    
    let jogadaComputador = escolhaComputador()
    
    // recebe o resultado do random para a jogada do computador
    const escolhaDoComputador = document.getElementById("escolhaComputador")
const spanJogada = document.createElement("span")
spanJogada.innerHTML = resultadoAmigavel(jogadaComputador)
escolhaDoComputador.appendChild(spanJogada) 



    const resultado = document.getElementById("resultado")
    let spanVitoria = document.createElement ("span")
    spanVitoria.innerHTML = jogo(Number(escolhaJogador), jogadaComputador)
    resultado.appendChild(spanVitoria)
    
    }

const buttonJogar = document.getElementById("jogar")
buttonJogar.addEventListener("click", jogar)




