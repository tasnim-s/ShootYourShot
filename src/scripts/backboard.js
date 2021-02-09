export default class BackBoard {
    constructor(x, y) {
        this.width = 213;
        this.height = 137;
        this.x = x - this.width/2;
        this.y = y - this.height * 2;
        this.innerRect = {
            width: 81,
            height: 66,
        };
        this.innerRect.x = this.x + this.innerRect.width/1.25;
        this.innerRect.y = this.y + this.innerRect.height/1.5;
        this.line = {
            x1: this.innerRect.x,
            y: this.innerRect.y + this.innerRect.height,
            x2: this.innerRect.x + this.innerRect.width
        }

    }

    draw(ctx) {
        // backboard
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = "#dadde1";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();

        // inner aim area
        ctx.beginPath();
        ctx.rect(this.innerRect.x, this.innerRect.y, this.innerRect.width, this.innerRect.height);
        ctx.strokeStyle = "#dadde1";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();

        // rim
        ctx.beginPath();
        ctx.moveTo(this.line.x1 - ctx.lineWidth, this.line.y);
        ctx.lineTo(this.line.x2 + ctx.lineWidth, this.line.y);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 8;
        ctx.stroke();
        ctx.closePath();
    }

    move(ctx, dx) {
        this.x += dx;
        this.innerRect.x += dx;
        this.line.x1 += dx;
        this.line.x2 += dx;
        this.draw(ctx);
    }
}