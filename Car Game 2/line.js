function line(y){
    this.width = 5;
    this.height = 80;
    this.x1 = 130;
    this.x2 = 265;
    this.y = y;

    this.show = function(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x1,this.y,this.width,this.height);
        ctx.fillRect(this.x2,this.y,this.width,this.height);
    }

    this.update = function(){
        this.y += screenMotion;
    }
}