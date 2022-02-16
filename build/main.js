System.register("types", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("game", [], function (exports_2, context_2) {
    "use strict";
    var config, state, snake;
    var __moduleName = context_2 && context_2.id;
    function initGame() {
        state.canvas = document.getElementById('canvas');
        state.canvas.width = window.innerWidth - 6;
        state.canvas.height = window.innerHeight - 6;
        state.context = state.canvas.getContext('2d');
        ctx.ellipse(300, 300, 20, 20, 0, 0, Math.PI * 2);
        ctx.ellipse(310, 300, 20, 20, 0, 0, Math.PI * 2);
        ctx.ellipse(320, 300, 20, 20, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    return {
        setters: [],
        execute: function () {
            config = {
                debug: true,
                fps: 30,
            };
            state = {
                canvas: undefined,
                context: undefined,
                cursor: undefined
            };
            snake = {
                id: 'peti',
                cells: [
                    { x: 100, y: 100 },
                    { x: 110, y: 110 },
                    { x: 120, y: 120 },
                    { x: 130, y: 130 },
                    { x: 140, y: 140 }
                ]
            };
            window.addEventListener('DOMContentLoaded', () => {
                initGame();
            });
            window.addEventListener('mousemove', (e) => {
                state.cursor = { x: e.clientX, y: e.clientY };
            });
        }
    };
});
//# sourceMappingURL=main.js.map