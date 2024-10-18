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
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;  // Esconder inicialmente
`;

document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainer.style.display = 'block';

    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // ou 'canvas' se preferir
        loop: true,
        autoplay: true,
        path: 'https://pedro-scardua.github.io/loadingTriploX/follow.json',
    });
}

window.addEventListener('load', function() {
    setTimeout(hideOverlay, 4000); // Atraso de 4000 milissegundos = 4 segundos
});
