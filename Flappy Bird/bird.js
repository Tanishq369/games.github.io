function bird() {
    this.x = 50;
    this.y = canvas.height / 2;
    this.r = 10;

    this.gravity = .01;
    this.velocity = 0;

    this.show = function(){
        context.fillStyle = 'white';
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.fill();
    };

    this.update = function(){
        this.velocity += this.gravity;
        this.y += this.velocity; 
    }

    this.up = function(){
        this.gravity = .01;
        this.velocity = -1.5;
    }
}