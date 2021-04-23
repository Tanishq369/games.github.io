function otherCar(){
    var p = Math.floor(Math.random()*3 +1);
    var c = Math.floor(Math.random()*3 +1);
    this.width = 45;
    this.height = 70;
    this.x = p==1? 42.5 : p==2? 177.5 : 312.5;
    this.y = -this.height;
    this.style = c==1? 'yellow' : c==2? 'red' : 'green';
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
        
        ctx.fillStyle = this.style;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    
    
    this.update = function(){
        this.y += screenMotion - carSpeed;
    }
    
    this.hit = function() {
        if(car.x == this.x){
            if((car.y<this.y+this.height && car.y + car.height > this.y)){
            end = true;
            }
        }
    }
}