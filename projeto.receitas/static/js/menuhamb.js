// 1. Selecionamos os elementos pelos IDs que você definiu no HTML
const btnMenu = document.getElementById('btn-menu');
const btnFechar = document.getElementById('btn-fechar');
const menuLateral = document.getElementById('menu-lateral');

// 2. Função para abrir o menu
btnMenu.addEventListener('click', () => {
    menuLateral.classList.add('ativo');
});

// 3. Função para fechar o menu (clicando no X)
btnFechar.addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
});

// 4. FECHAR AO CLICAR FORA (Toque de mestre profissional)
// Se o usuário clicar em qualquer lugar da tela que NÃO seja o menu, ele fecha
document.addEventListener('click', (evento) => {
    // Verifica se o clique foi fora do menu e fora do botão de abrir
    if (!menuLateral.contains(evento.target) && !btnMenu.contains(evento.target)) {
        menuLateral.classList.remove('ativo');
    }
});