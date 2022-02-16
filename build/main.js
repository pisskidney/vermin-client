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
    var state, FPS, SNAKES;
    var __moduleName = context_2 && context_2.id;
    function initGame() {
        const canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth - 6;
        canvas.height = window.innerHeight - 6;
        const ctx = canvas.getContext('2d');
        ctx.ellipse(300, 300, 20, 20, 0, 0, Math.PI * 2);
        ctx.ellipse(310, 300, 20, 20, 0, 0, Math.PI * 2);
        ctx.ellipse(320, 300, 20, 20, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    return {
        setters: [],
        execute: function () {
            state = {
                cursor: undefined
            };
            FPS = 30;
            SNAKES = new Map();
            SNAKES.set('0', [{ x: 100, y: 100 }]);
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