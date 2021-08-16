const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const escolhaComputador = () => randomNumber(0, 2)

let resultadoAmigavel = (jogadaComputador) =>{
    if (jogadaComputador === 0) {
        return "pedra"
    }
    if (jogadaComputador === 1) {
        return "papel"
    }
    if (jogadaComputador === 2) {
        return "tesoura"
    }
}

const jogar = () => {
    let escolhaJogador = document.getElementById("escolhaJogador").value
    let jogadaComputador = escolhaComputador()

    const escolhaDoComputador = document.getElementById("escolhaComputador")
    const spanJogada = document.createElement("span")
    spanJogada.innerHTML = resultadoAmigavel(jogadaComputador)
    escolhaDoComputador.appendChild(spanJogada)

    const resultado = document.getElementById("resultado")
    let spanVitoria = document.createElement("span")
    spanVitoria.innerHTML = jogo(Number(escolhaJogador), jogadaComputador)
    resultado.appendChild(spanVitoria)
}

const buttonJogar = document.getElementById("jogar")
buttonJogar.addEventListener("click", jogar)

const jogo = (escolhaJogador, jogadaComputador) => {
    if (escolhaJogador === 0) { //pedra
        if (jogadaComputador === 1) {
            return "Computador venceu"
        }
        if (jogadaComputador === 2) {
            return "Você ganhou"
        }
        return "Empate"
    }

    if (escolhaJogador === 1) { //papel
        if (jogadaComputador === 2) {
            return "Computador venceu"
        }
        if (jogadaComputador === 0) {
            return "Você ganhou"
        }
        return "Empate"
    }

    if (escolhaJogador === 2) { //tesoura
        if (jogadaComputador === 0) {
            return "Computador venceu"
        }
        if (jogadaComputador === 1) {
            return "Você ganhou"
        }
        return "Empate"
    }
}

