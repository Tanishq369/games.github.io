minimum = 200;
maximum = 400;

function path() {
    this.style = 'black'
    this.x = canvas.width;
    this.speed = screenMotion;
    this.width = 150;
    this.min = minimum;
    this.max = maximum;
    this.gap = Math.floor(this.min + Math.floor(Math.random() * (this.max - this.min)));
    this.top = Math.floor((Math.random() * (canvas.height - this.gap) + 1));
    this.bottom = canvas.height - this.gap  - this.top;
    

    this.show = function(){
        ctx.fillStyle = this.style;
        ctx.fillRect(this.x , 0, this.width, this.top);
        ctx.fillRect(this.x , this.top + this.gap, this.width, this.bottom);
    }

    this.update = function(){
        this.x -= this.speed;
    };

    this.hit = function(){
        if((car.x+car.width > this.x && car.x+car.width < this.x + this.width) || (car.x > this.x && car.x < this.x + this.width)){
            if(car.y<this.top || car.y+car.height > canvas.height - this.bottom){
            end = true;
            this.style = 'red';
            }
        }
    }

}