function initGame() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;

    canvas.width = window.innerWidth - 2;
    canvas.height = window.innerHeight - 2;

    const ctx = canvas.getContext('2d');
}


window.addEventListener('DOMContentLoaded', () => {
    initGame();
});
