export default class Ball {
    constructor(game) {
        this.ball = document.getElementById("ballImg");
        this.game = game;
        this.gravity = 40;
        this.friction = .5;
        this.miss = document.getElementById("missNoise");
        this.reset();
    }
    reset() {
        this.diameter = 70;
        this.x = this.game.width/2 - this.diameter/2;
        this.y = this.game.height - this.diameter/2 - this.diameter;
        this.dx = 0;
        this.dy = 0;
        this.comingDown = false;
        this.pos1 = [(this.x + this.diameter/2), (this.y + this.diameter/2)];
        this.pos2 = null;
        this.shooting = false;
    }

    random() {
        const spawnPoint = (Math.random() * (this.game.width - this.diameter));
        this.diameter = 70;
        this.x = spawnPoint;
        this.y = this.game.height - this.diameter/2 - this.diameter;
        this.dx = 0;
        this.dy = 0;
        this.comingDown = false;
        this.pos1 = [(this.x + this.diameter/2), (this.y + this.diameter/2)];
        this.pos2 = null;
        this.shooting = false;
    }

    draw() {
        this.game.ctx.drawImage(this.ball, this.x, this.y, this.diameter, this.diameter);
    }

    update() {

        if (this.y < this.game.height/2) {
            this.diameter *= .99;
        }

        if(this.y + this.diameter < this.game.backboard.y) {
            this.comingDown = true;
            this.dx *= this.friction;
            this.dy = this.gravity;
        }

        if(this.comingDown && this.y + this.diameter*(5/6) > this.game.rim.y) {
            
            if(this.game.rim.x1 > this.x  && this.game.rim.x1 < this.x + this.diameter ) {
                this.dy = -this.dy;
                this.dy *= this.friction;
                this.dx -= 5;
                this.miss.play();
            }
            else if(this.game.rim.x2 > this.x  && this.game.rim.x2 < this.x + this.diameter ) {
                this.dy = -this.dy;
                this.dy *= this.friction;
                this.dx += 5;
                this.miss.play();
            }
            else {
                this.dy = this.gravity;
                this.dy *= this.friction;
            }
        }
        
        
        
        this.x += this.dx;
        this.y += this.dy;
    }
}