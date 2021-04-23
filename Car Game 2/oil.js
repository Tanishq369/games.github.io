function oil(){
    var p = Math.floor(Math.random()*3 +1);
    this.x = p==1? 65 : p==2? 200: 335;
    this.r = 25;
    this.y = -this.r;
    
    this.show = function(){
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fill();
    };
    
    this.update = function(){
        this.y += screenMotion;
    }
    
    this.hit = function(){
        if(this.y + this.r > car.y && this.y-this.r < car.y){
            if(Math.abs(this.x+this.r-car.x)<=50){
            screenMotion = 2;
            }
        }
    }
}