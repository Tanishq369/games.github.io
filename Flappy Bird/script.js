var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.setAttribute('style' , 'border:4px solid black;');
context.fillStyle = '#333';
context.fillRect(0,0, canvas.width, canvas.height);
var pipes = [];
var fames = 30;
var end = false;
var score = 0;

function setup() {
    
    pipes.push(new pipe());
    bird = new bird();
    pipes[0].show();
    bird.show();
    canvas.addEventListener('mousedown', mouse);
}

function mouse(){
    bird.up();
}

function render(){
    if(end){
        endscreen();
        clearInterval(a);
        clearInterval(b);
        return ;
    }
    context.fillStyle = '#333';
    context.fillRect(0,0, canvas.width, canvas.height);
    bird.update();
    bird.show();
    
    for(var i=0; i<pipes.length;i++){
        
        pipes[i].update();
        if(pipes[i].hit(bird)){
            end = true;
            pipes[i].style = 'red';
        }
        pipes[i].show();
        
        if(pipes[i].x < 0){
            pipes.splice(i,1);
            score++;
            if(score >= 10 ){
                minimum = 150;
                maximum = 250;
            }else if(score >=20){
                minimum = 100;
                maximum = 200;
            }else if(score >= 30){
                minimum = 50;
                maximum = 150;
            }else if (score > 40){
                maximum = 100;
            }
            document.getElementById('scoreBoard').innerText = score;
        }
    }
    hitTopBottom();
}

function hitTopBottom(){
    if(bird.y - bird.r < 0 || bird.y + bird.r > canvas.height){
        end = true;
        canvas.setAttribute('style' , 'border:4px solid red;');
    }
}


function endscreen() {
    document.getElementById('score').innerText = score;
    document.getElementById('endScreen').setAttribute('style', 'transform: scale(1,1);');
} 

function reset(){
    minimum = 250;
    maximum = 350;
    score = 0;
    document.getElementById('scoreBoard').innerText = score;
    
    pipes= []; 
    bird.y = canvas.height / 2;
    bird.gravity = .01;
    bird.velocity = 0;
    document.getElementById('endScreen').setAttribute('style', 'transform: scale(0,0);');
    canvas.setAttribute('style' , 'border:4px solid black;');
    end = false;
    startGame();
}


function addPipes(){
    if(end)
    return;
    pipes.push(new pipe());
}

function startGame(){
    
    a = setInterval(render, 1000/frames);
    b = setInterval(addPipes, 1500);
}

setup();
startGame();