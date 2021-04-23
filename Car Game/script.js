var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var fps = 120;
var car;
end = false;
var paths = [];
var c = 1;
var coins = [];
var screenMotion = 2;
var score = 0;

document.addEventListener('keydown', keypress);

function setup(){
    ctx.fillStyle = '#999';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    car = new car();
    car.show();
    paths.push(new path);
    paths[0].show();
}


function keypress(e){
    car.move(e);
}



function render (){
    if(end){
        endScreen();
        return;
        
    }
    ctx.fillStyle = '#999';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    car.show();
    for(var i=0;i<paths.length;i++){
        
        paths[i].update();
        paths[i].hit();
        paths[i].show();
        if(paths[i].x + paths[i].width < 0){
            paths.splice(i,1);
            score++;
        }
    }
    
    for(var i=0;i<coins.length;i++){
        coins[i].update();
        if(coins[i].hit()){
            coins.splice(i,1);
            score += 10;
            console.log('hit');
        }
        coins[i].show();
        
    }
    
    if(paths[paths.length-1].x<=canvas.width-paths[paths.length-1].width)
    addPath();
    
    
    document.getElementById("scoreBoard").innerText = score;
    checkScore();
}

function addPath(){
    var p;
    while(true){
        p = new path();
        if(paths[paths.length-1].top + 60 + p.bottom < canvas.height && paths[paths.length-1].bottom + 60 + p.top < canvas.height)
        break;
    }
    c++;
    paths.push(p);
    addCoin();
}


function endScreen(){
    document.getElementById("score").innerText = score;
    document.getElementById("endScreen").setAttribute('style', 'transform: scale(1,1)');
}


function reset(){
    coins = [];
    c=0;
    minimum = 200;
    maximum = 400;
    score = 0;
    document.getElementById("scoreBoard").innerText = score;
    paths = [];
    document.getElementById("endScreen").setAttribute('style', 'transform: scale(0,0)');
    end = false;
    paths.push(new path());
}

function checkScore(){
    switch(c){
        case 30: 
        screenMotion = 3; 
        for(var i=0;i<paths.length;i++)
        paths[i].speed = screenMotion; 
        
        for(var i=0;i<coins.length;i++)
        coins[i].speed = screenMotion;
        break;


        case 60: 
        screenMotion = 4; 
        for(var i=0;i<paths.length;i++)
        paths[i].speed = screenMotion; 
        
        for(var i=0;i<coins.length;i++)
        coins[i].speed = screenMotion;
        break;


        case 90: 
        screenMotion = 5; 
        for(var i=0;i<paths.length;i++)
        paths[i].speed = screenMotion; 
        
        for(var i=0;i<coins.length;i++)
        coins[i].speed = screenMotion;
        break;
    }
}


function addCoin(){
    var t = parseInt(Math.floor(Math.random()*20 + 1));
    if(t == 1){
        var x = paths[paths.length - 1].x + (paths[paths.length - 1].width/2);
        var y = paths[paths.length - 1].top + (paths[paths.length - 1].gap/2);
        coins.push(new coin(x,y));
    }
}

setup();
setInterval(render, 1000/fps);