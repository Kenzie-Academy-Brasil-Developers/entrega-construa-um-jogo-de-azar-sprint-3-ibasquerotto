// capturas da DOM
const spanVitoria = document.getElementById("spanVitoria")
const resultado = document.getElementById("resultado")
const escolhaDoComputador = document.getElementById("escolhaComputador")
const spanJogada = document.getElementById("spanJogada")
const buttonJogar = document.getElementById("jogar")

//funcoes
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const resultadoAmigavel = (jogadaComputador) => {
    let jogadas = ["pedra", "papel", "tesoura"]
    return jogadas[jogadaComputador]
}

const jogo = (escolhaJogador, jogadaComputador) => {
    let placar = (`${escolhaJogador}${jogadaComputador}`)
    
    const condicoesVitoria = [ //[jogadorVence], [computadorVence]
        ["02", "10", "21"],
        ["20", "01", "12"]
        
    ]

    if (condicoesVitoria[0].includes(placar)) {
        return "Você Ganhou!!!"
    }
    if (condicoesVitoria[1].includes(placar)) {
        return "O Computador Ganhou!!!"
    }
    return "Empate!!!"
}

const jogar = () => {

    const escolhaJogador = document.getElementById("escolhaJogador").value
    const jogadaComputador = randomNumber(0, 2)

    spanJogada.innerHTML = "Aqui vai a escolha do Computador"
    spanJogada.innerHTML = resultadoAmigavel(jogadaComputador)
    escolhaDoComputador.appendChild(spanJogada)
    spanJogada.classList.add("spanJogada")

    spanVitoria.innerHTML = ""
    spanVitoria.innerHTML = jogo(Number(escolhaJogador), jogadaComputador)
    resultado.appendChild(spanVitoria)
}

buttonJogar.addEventListener("click", jogar)