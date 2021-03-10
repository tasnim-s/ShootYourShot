export default class Rim {
    constructor(game) {
        this.game = game;
        this.backboard = this.game.backboard;
        this.reset();
    }

    reset() {
        this.x1 = this.backboard.innerRect.x - 5;
        this.x2 = this.backboard.innerRect.x + this.backboard.innerRect.width + 5;
        this.y = this.backboard.innerRect.y + this.backboard.innerRect.height;
    }

    draw() {
        this.game.ctx.beginPath();
        this.game.ctx.moveTo(this.x1 - this.game.ctx.lineWidth, this.y);
        this.game.ctx.lineTo(this.x2 + this.game.ctx.lineWidth, this.y);
        this.game.ctx.strokeStyle = "red";
        this.game.ctx.lineWidth = 8;
        this.game.ctx.stroke();
        this.game.ctx.closePath();
    }

    update() {
        this.x1 += this.backboard.dx;
        this.x2 += this.backboard.dx;
    }
}