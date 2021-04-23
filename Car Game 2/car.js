function car(){
    this.width = 45;
    this.height = 70;
    this.x = (canvas.width/2) - this.width/2;
    this.y = 500;
    
    this.speed = 135;

    this.show = function(){
        

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x+3, this.y + 15, 8, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x+3, this.y + 55, 8, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x+this.width -3 , this.y +15, 8, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x+this.width -3, this.y +55, 8, 0, 2*Math.PI);
        ctx.fill();

        ctx.fillStyle = "blue";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }


    this.move = function(k){
        if((k.keyCode == 68 || k.keyCode == 39) && this.x + this.speed < canvas.width)
        this.x += this.speed;

        else if((k.keyCode == 65 || k.keyCode == 37) && this.x - this.speed > 0)
        this.x -= this.speed;
    }
}