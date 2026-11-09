const frases = [
    "Pequenos passos também levam longe.",
    "A prática transforma dificuldade em habilidade.",
    "Não tenha medo de começar do zero.",
    "Aprender é descobrir algo novo todos os dias.",
    "Sua criatividade pode virar algo incrível.",
    "Persistência é continuar tentando com inteligência."
];

const frase = document.getElementById("frase");
const botao = document.getElementById("gerar");

let ultimaFrase = -1;

botao.addEventListener("click", () => {

    let sorteio;

    do {
        sorteio = Math.floor(Math.random() * frases.length);
    } while (frases.length > 1 && sorteio === ultimaFrase);

    ultimaFrase = sorteio;

    frase.textContent = `“${frases[sorteio]}”`;

});