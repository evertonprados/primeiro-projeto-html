const botao = document.getElementById('botao-tema');
const corpo = document.body;

botao.addEventListener('click', () => {
    console.log("O botão foi clicado!"); // Isso aparece no Console (F12)
    corpo.classList.toggle('dark-mode');
});