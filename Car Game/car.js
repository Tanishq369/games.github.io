function car(){
    this.width = 40;
    this.height = 25;
    this.x = 50;
    this.y = (canvas.height/2) - this.height;
    
    this.speed = 25;

    this.show = function(){
        

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x+10, this.y +2, 6, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x+30, this.y +2, 6, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x+10, this.y -2 + this.height, 6, 0, 2*Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x+30, this.y -2 + this.height, 6, 0, 2*Math.PI);
        ctx.fill();

        ctx.fillStyle = "blue";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }


    this.move = function(k){
        if(k.keyCode == 83 || k.keyCode == 40)
        this.y += this.speed;
        else if(k.keyCode == 87 || k.keyCode == 38)
        this.y -= this.speed;
    }
}