// Cria o overlay que cobrirá toda a tela
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1.0);
    z-index: 999;
`;

// Cria o container para a animação Lottie
const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;  // Exibir inicialmente
`;

// Adiciona o lottieContainer dentro do overlay
overlay.appendChild(lottieContainer);
// Adiciona o overlay ao corpo do documento
document.body.appendChild(overlay);

function hideOverlay() {
    // Inicia a animação Lottie
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // ou 'canvas' se preferir
        loop: true,
        autoplay: true,
        path: 'https://pedro-scardua.github.io/loadingTriploX/follow.json',
    });

    // Após 4 segundos, oculta o overlay e a animação
    setTimeout(function() {
        overlay.style.display = 'none';
    }, 4000); // 4000 milissegundos = 4 segundos
}

// Quando a página carregar, executa a função hideOverlay
window.addEventListener('load', hideOverlay);
