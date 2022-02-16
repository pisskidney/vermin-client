import { Config, State, Snake, Position } from './types';

const config: Config = {
    debug: true,
    fps: 30,
}

const state: State = {
    canvas: undefined,
    context: undefined,
    cursor: undefined

}

const snake: Snake = {
    id: 'peti',
    cells: [
        {x: 100, y: 100},
        {x: 110, y: 110},
        {x: 120, y: 120},
        {x: 130, y: 130},
        {x: 140, y: 140}
    ]
};

function initGame() {
    state.canvas = document.getElementById('canvas') as HTMLCanvasElement;

    state.canvas.width = window.innerWidth - 6;
    state.canvas.height = window.innerHeight - 6;

    state.context = state.canvas.getContext('2d');

    ctx.ellipse(300, 300, 20, 20, 0, 0, Math.PI * 2);
    ctx.ellipse(310, 300, 20, 20, 0, 0, Math.PI * 2);
    ctx.ellipse(320, 300, 20, 20, 0, 0, Math.PI * 2);

    ctx.fill();
}


window.addEventListener('DOMContentLoaded', () => {
    initGame();
});

window.addEventListener('mousemove', (e: MouseEvent) => {
    state.cursor = {x: e.clientX, y: e.clientY};
});
