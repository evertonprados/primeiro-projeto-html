const botao = document.getElementById('botao-tema');
const corpo = document.body;

botao.addEventListener('click', () => {
    console.log("O botão foi clicado!"); // Isso aparece no Console (F12)
    corpo.classList.toggle('dark-mode');
});
// 1. Nossa lista de frases (podes adicionar as que quiseres!)
const frases = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A melhor forma de prever o futuro é criá-lo.",
    "Errar é apenas a oportunidade de começar de novo com mais inteligência.",
    "Código limpo é poesia escrita para máquinas entenderem.",
    "A consistência bate o talento 100% das vezes."
];

// 2. Pegamos os novos elementos do HTML
const botaoFrase = document.getElementById('botao-frase');
const displayFrase = document.getElementById('texto-frase');

// 3. A lógica para escolher uma frase aleatória
botaoFrase.addEventListener('click', () => {
    // Sorteia um número entre 0 e o tamanho da lista
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    
    // Troca o texto na tela
    displayFrase.innerText = frases[indiceAleatorio];
    
    // Um efeito visual extra: muda a cor do texto para dar destaque
    displayFrase.style.fontStyle = "italic";
});
botaoFrase.addEventListener('click', () => {
    console.log("Sorteando frase..."); // Se isso aparecer no F12, o problema é no HTML/CSS
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    displayFrase.innerText = frases[indiceAleatorio];
    displayFrase.style.fontStyle = "italic";
});