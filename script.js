const botaoTema = document.getElementById('botao-tema');
const corpo = document.body;

// Lógica do Tema
botaoTema.addEventListener('click', () => {
    corpo.classList.toggle('dark-mode');
    console.log("Tema alternado!");
});

// Elementos da Frase
const botaoFrase = document.getElementById('botao-frase');
const displayFrase = document.getElementById('texto-frase');

// NOVA FUNÇÃO: Buscando frase de uma API (Conselho do dia)
async function buscarFrase() {
    displayFrase.innerText = "Buscando inspiração..."; // Feedback para o usuário
    
    try {
        // O fetch vai até a API buscar um conselho
        const resposta = await fetch('https://api.adviceslip.com/advice');
        const dados = await resposta.json();
        
        // Atualiza a tela com o conselho vindo da internet
        displayFrase.innerText = `"${dados.slip.advice}"`;
        displayFrase.style.fontStyle = "italic";
        
    } catch (erro) {
        console.error("Erro ao buscar frase:", erro);
        displayFrase.innerText = "Conexão falhou. O sucesso exige persistência!";
    }
}

// Escutador do botão de frase
botaoFrase.addEventListener('click', buscarFrase);