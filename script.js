const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneText = document.querySelector("#fortune_text");

const cookieBtn = document.querySelector("#closed_cookie");
const raffleAgainBtn = screen2.querySelector("button");

const fortunePhrases  = [
    "Em meio aos desafios, encontrarás tua força mais profunda. Persiste, pois é lá que reside a tua vitória.",
    "A jornada rumo aos teus sonhos pode ser árdua, mas cada passo dado é um triunfo sobre a adversidade. Não desistas.",
    "Nas batalhas da vida, a perseverança é tua maior aliada. Não abaixes a guarda, pois a vitória é para os que persistem.",
    "Por mais escura que pareça a noite, o amanhecer sempre traz consigo a promessa de um novo dia. Não desistas agora.",
    "Os obstáculos são apenas testes do destino, desenhados para fortalecer tua determinação. Persiste e conquistarás.",
    "No caminho da realização, a persistência é a chama que ilumina a escuridão da incerteza. Segue em frente, mesmo quando parecer difícil.",
    "Quando o cansaço ameaçar tomar conta, lembra-te do teu propósito e da tua paixão. A persistência te levará além de qualquer limite.",
    "Não importa quantas vezes caías, o verdadeiro fracasso está em desistir. Levanta-te e continua, pois a persistência é a chave do sucesso.",
    "Na jornada da vida, os que persistem são os que deixam sua marca no mundo. Não te rendas, pois tua história ainda está sendo escrita.",
    "Mesmo nos momentos mais sombrios, a luz da tua determinação é capaz de dissolver as nuvens. Nunca desistas, pois o amanhã será mais brilhante."
];


cookieBtn.addEventListener("click", raffleFortune);
raffleAgainBtn.addEventListener("click", toggleScreen);
window.addEventListener("keydown", enterClick);

function raffleFortune() {
    let randomNum = Math.round(Math.random() * fortunePhrases.length);
    fortuneText.innerText = fortunePhrases[randomNum];

    toggleScreen();
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function enterClick(e) {
    if (e.key === "Enter" && screen2.classList.contains("hide")) {
        raffleFortune();
    } else if ((e.key === "Enter" || e.key === "Escape") && screen1.classList.contains("hide")) {
        toggleScreen();
    }
}