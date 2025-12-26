const botaoTema = document.getElementById('botao-tema');
const corpo = document.body;

// 1. MEMÓRIA: Assim que o site carrega, ele olha na "gaveta" (localStorage)
const temaSalvo = localStorage.getItem('tema');

// Se na gaveta estiver escrito 'dark', ele já começa no modo escuro
if (temaSalvo === 'dark') {
    corpo.classList.add('dark-mode');
}

// Lógica do Tema com "Anotação"
botaoTema.addEventListener('click', () => {
    corpo.classList.toggle('dark-mode');
    
    // IF/ELSE: Decidindo o que salvar na memória
    if (corpo.classList.contains('dark-mode')) {
        // Se o modo escuro está ativo, anota 'dark'
        localStorage.setItem('tema', 'dark');
    } else {
        // Se não, anota 'light'
        localStorage.setItem('tema', 'light');
    }
    
    console.log("Preferência de tema salva!");
});

// --- Lógica da Frase (Sua API que já está ótima) ---
const botaoFrase = document.getElementById('botao-frase');
const displayFrase = document.getElementById('texto-frase');

async function buscarFrase() {
    displayFrase.innerText = "Buscando inspiração...";
    try {
        const resposta = await fetch('https://api.adviceslip.com/advice');
        const dados = await resposta.json();
        displayFrase.innerText = `"${dados.slip.advice}"`;
        displayFrase.style.fontStyle = "italic";
    } catch (erro) {
        displayFrase.innerText = "Conexão falhou. O sucesso exige persistência!";
    }
}

botaoFrase.addEventListener('click', buscarFrase);