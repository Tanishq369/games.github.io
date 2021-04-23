c = 0;
boxes = document.querySelectorAll('.game .box');
player1 = 'Player 1';
player2 = 'Player 2';
p1score = 0;
p2score = 0;
window.onload = start();
function start() {
    
    add();
    
}

function draw(){
    var img = this.querySelector('img');
    if(c%2==0)
    img.src = 'tic.png';
    else
    img.src = 'tac.png';
    c++;
    
    this.removeEventListener('click', draw);
    check();
}

function check(){
    for(var i=0;i<boxes.length;i+=3){
        if(boxes[i].querySelector('img').src == 'file:///C:/Users/Irshad/Desktop/Tic-tac/tic.png' && boxes[i].querySelector('img').src == boxes[i+1].querySelector('img').src && boxes[i].querySelector('img').src == boxes[i+2].querySelector('img').src ){
            p1score++;
            remove();
            score();
        }
        if(boxes[i].querySelector('img').src == 'file:///C:/Users/Irshad/Desktop/Tic-tac/tac.png' && boxes[i].querySelector('img').src == boxes[i+1].querySelector('img').src && boxes[i].querySelector('img').src == boxes[i+2].querySelector('img').src ){
            p2score++;
            remove();
            score();
        }
    }


    for(var i=0;i<3;i++){
        if(boxes[i].querySelector('img').src == 'file:///C:/Users/Irshad/Desktop/Tic-tac/tic.png' && boxes[i].querySelector('img').src == boxes[i+3].querySelector('img').src && boxes[i].querySelector('img').src == boxes[i+6].querySelector('img').src ){
            p1score++;
            remove();
            score();
        }
        if(boxes[i].querySelector('img').src == 'file:///C:/Users/Irshad/Desktop/Tic-tac/tac.png' && boxes[i].querySelector('img').src == boxes[i+3].querySelector('img').src && boxes[i].querySelector('img').src == boxes[i+6].querySelector('img').src ){
            p2score++;
            remove();
            score();
        }
    }

    if(boxes[0].querySelector('img').src == 'file:///C:/Users/Irshad/Desktop/Tic-tac/tic.png' && boxes[0].querySelector('img').src == boxes[4].querySelector('img').src && boxes[0].querySelector('img').src == boxes[8].querySelector('img').src ){
        p1score++;
        remove();
        score();
    }
    if(boxes[0].querySelector('img').src == 'file:///C:/Users/Irshad/Desktop/Tic-tac/tac.png' && boxes[0].querySelector('img').src == boxes[4].querySelector('img').src && boxes[0].querySelector('img').src == boxes[8].querySelector('img').src ){
        p2score++;
        remove();
        score();
    }

    if(boxes[2].querySelector('img').src == 'file:///C:/Users/Irshad/Desktop/Tic-tac/tic.png' && boxes[2].querySelector('img').src == boxes[4].querySelector('img').src && boxes[2].querySelector('img').src == boxes[6].querySelector('img').src ){
        p1score++;
        remove();
        score();
    }
    if(boxes[2].querySelector('img').src == 'file:///C:/Users/Irshad/Desktop/Tic-tac/tac.png' && boxes[2].querySelector('img').src == boxes[4].querySelector('img').src && boxes[2].querySelector('img').src == boxes[6].querySelector('img').src ){
        p2score++;
        remove();
        score();
    }
    
    if(p1score == 3){
        document.getElementById('win').innerHTML = player1 + ' Won';
        document.querySelector('button').disabled = true;
    }
    if(p2score == 3){
        document.getElementById('win').innerHTML = player2 + ' Won';
        document.querySelector('button').disabled = true;
    }
}

function remove(){
    for(var i=0;i<boxes.length;i++){
         boxes[i].removeEventListener('click', draw);
    }
}

function add(){
    for(var i=0;i<boxes.length;i++){
         boxes[i].addEventListener('click', draw);
    }
}

function resetPlayers(){
    p1score = 0;
    p2score = 0;
    score();
    document.getElementById('win').innerHTML = '';
    document.querySelector('button').disabled = false;

}

function resetGame(){
    for(var i=0;i<boxes.length;i++){
        boxes[i].querySelector('img').src = 'file:///C:/Users/Irshad/Desktop/Tic-tac/none.png';
    }
    c = 0;
    add();
    
    
}

function resetName(){
    player1 = 'Player 1';
    player2 = 'Player 2';
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
}

function update(){
    console.log(document.getElementById('player1').value);
    if(document.getElementById('player1').value)
    player1 = document.getElementById('player1').value;
    
    if(document.getElementById('player2').value)
    player2 = document.getElementById('player2').value;
}

function score(){
    document.getElementById('p1score').innerHTML = p1score;
    document.getElementById('p2score').innerHTML = p2score;
}