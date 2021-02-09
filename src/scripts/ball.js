export default class Ball {
    constructor(x, y) {
        this.diameter = 90;
        this.ball = new Image();
        this.ball.src = ".././dist/images/ball.png";
        this.x = x - this.diameter/2;
        this.y = y - this.diameter/2 - this.diameter;

    }

    draw(ctx, pos = null) {
        if(pos) {
            this.x = pos[0] - this.diameter/2;
            this.y = pos[1] - this.diameter/2 - this.diameter;
        }
        ctx.drawImage(this.ball, this.x, this.y, this.diameter, this.diameter);
    }

    move(ctx, dy, cursorX, cursorY) {
        this.draw(ctx);
        this.y -= dy;
        // this.x = cursorX - this.diameter/2;
        // this.y = cursorY - this.diameter/2;
    }
}