var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var car = new car();
var screenMotion = 0;
var lines = [];
var oils = [];
var cars = [];
var acceleration = 0.1;
var carSpeed = 8;
var end = false;
var score = 0;
var oilFreq = 10;
var carFreq = 8;


function addScore(){
    score++;
    document.getElementById('scoreBoard').innerText = score;
}

function moveCar(k){
    car.move(k);
}

function checkSpeed(){
    if(screenMotion >= 15){
        return;
    }
    
    screenMotion += acceleration;
}

function addOil(){
    var x = Math.floor(Math.random()*oilFreq + 1);
    if(x==1){
        oils.push(new oil());
        return true;
    }
    else
    return false;
}

function addCar(){
    if(cars.length!=0){
    if(cars[cars.length - 1].y <20)
    return false;
    }

    var x = Math.floor(Math.random()*carFreq + 1);
    if(x==1){
        cars.push(new otherCar());
        return true;
    }
    else
    return false;
}


function endScreen(){
    document.getElementById('score').innerText = score;
    document.getElementById('endScreen').setAttribute('style', 'transform:scale(1,1)');
    clearInterval(a);
    clearInterval(b);
    document.removeEventListener('keydown', moveCar);
}


function setup(){
    ctx.fillStyle ='#999';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    var x=canvas.height - 80;
    
    while(x > 0){
        lines.push(new line(x));
        x = x - lines[0].height - 20;
    }
    document.addEventListener('keydown', moveCar);
}




function render (){
    if(end){
        endScreen();
        return;
    }

    ctx.fillStyle ='#999';
    ctx.fillRect(0,0,canvas.width,canvas.height);   
    
    
    //Oils
    if(oils.length!=0){
        if(oils[0].y - oils[0].r>=canvas.height)
        oils.splice(0,1);
    }
    
    for(var i=0;i<oils.length;i++){
        oils[i].hit();
        oils[i].update();
        oils[i].show();
    }


    // Other Cars

    if(cars.length!=0){
        if(cars[0].y>canvas.height + 100)
        cars.splice(0,1);
    }


    for(var i=0;i<cars.length;i++){
        cars[i].hit();
        cars[i].update();
        cars[i].show();
    }
    
    // Creating And Showing Lines
    if(lines[lines.length-1].y>=20){
        lines.push(new line(-80));
        if(!addCar())
        addOil();
    }
    
    if(lines[0].y>=canvas.height)
    lines.splice(0,1);
    
    for(var i=0;i<lines.length;i++){
        lines[i].update();
        lines[i].show();
    }
    
    // Car
    car.show();
    checkSpeed();
}


function reset(){
    cars = [];
    lines = [];
    oils = [];
    score = 0;
    c = 0;
    end = false;
    screenMotion = 0;
    document.getElementById('endScreen').setAttribute('style', 'transform:scale(0,0)');
    setup();
    a = setInterval(render, 1000/30);
    b = setInterval(addScore, 1000);
}


window.onload = function(){
    reset();
}