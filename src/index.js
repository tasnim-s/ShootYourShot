import Game from './scripts/game';
import "./styles/index.scss";

const canvas = document.getElementById("canvas");
const scoreDiv = document.getElementById("score");
const ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 800;

let game = new Game(ctx, scoreDiv);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.update();
    game.draw();
    game.scoreBucket();
    requestAnimationFrame(animate);
}

// Below is whats running
animate();