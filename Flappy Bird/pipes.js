minimum = 250;
maximum = 350;

function pipe() {
    this.width = 20;
    this.min = minimum;
    this.max = maximum;
    this.gap = Math.floor(this.min + Math.floor(Math.random() * (this.max - this.min)));
    this.top = Math.floor((Math.random() * (canvas.height - this.gap) + 1));
    this.bottom = canvas.height - this.gap  - this.top;
    this.x = canvas.width;
    this.speed = 1;
    this.style = 'white';

    
    this.show = function(){
        context.fillStyle = this.style;
        context.fillRect(this.x , 0, this.width, this.top);
        context.fillRect(this.x , this.top + this.gap, this.width, this.bottom);
    };

    this.update = function(){
        this.x -= this.speed;
    };

    this.hit = function(bird){
        if(bird.x + bird.r >this.x && bird.x - bird.r < this.x + this.width){
            if(bird.y - bird.r < this.top || bird.y  + bird.r>  canvas.height - this.bottom)
            return true;
        }
        else
        return false;
    }
}