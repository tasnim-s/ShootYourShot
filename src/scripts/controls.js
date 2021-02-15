export default class Controls {
    constructor(game) {
        game.ctx.canvas.addEventListener("mousedown", (e) => {
            game.basketball.pos2 = null;
            // console.log([e.clientX - game.ctx.canvas.offsetLeft, e.clientY - game.ctx.canvas.offsetTop]);
            game.basketball.shooting = true;
        }, false);

        game.ctx.canvas.addEventListener("mouseup", (e) => {
            game.basketball.pos2 = [e.clientX - game.ctx.canvas.offsetLeft, e.clientY - game.ctx.canvas.offsetTop];
            const angle = Math.atan2(game.basketball.pos2[1] - game.basketball.pos1[1], game.basketball.pos2[0] - game.basketball.pos1[0]);
            game.basketball.dx = Math.cos(angle) * 25;
            game.basketball.dy = Math.sin(angle) * 25;
        }, false);

        document.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "Space":
                    game.running = true;
                    break;
            
                default:
                    break;
            }
        }, false);

    }

}