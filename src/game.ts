const FPS: number = 30;
const SNAKES = new Map<string, Array<{x: number, y: number}>>();
SNAKES.set('0', [{x: 100, y: 100}]);

function initGame() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;

    canvas.width = window.innerWidth - 6;
    canvas.height = window.innerHeight - 6;

    const ctx = canvas.getContext('2d');

    ctx.ellipse(300, 300, 20, 20, 0, 0, Math.PI * 2);
    ctx.ellipse(310, 300, 20, 20, 0, 0, Math.PI * 2);
    ctx.ellipse(320, 300, 20, 20, 0, 0, Math.PI * 2);

    ctx.fill();
}


window.addEventListener('DOMContentLoaded', () => {
    initGame();
});
