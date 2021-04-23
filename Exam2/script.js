question = document.querySelectorAll('.question');
list = document.querySelectorAll('.nav li');
window.onload = function() {
    question[0].style.display = 'block';

    window.addEventListener('hashchange', change);
    var x = document.querySelectorAll('.questions div');
    for(var i=0; i<x.length;i++){
        x[i].addEventListener('click', func);
    }
}

function change(){
    var hash = location.hash;
    console.log(hash);
    for(var i=0; i<15; i++)
    {
        question[i].style.display = 'none';
    }
    var x = document.querySelector(hash);
    x.style.display = 'block';
}

function func(){
    var y = this.querySelectorAll('input');

    var flag=false;
    for(var i=0; i<4; i++){
        if(y[i].checked)
        flag=true;
        
    }

    if(flag){
        if(list[(this.id.substring(1) - 1)].className.search('active')==-1)
        list[(this.id.substring(1) - 1)].className += ' active';
    }
}

function resetAll(){
    
    var y = document.querySelectorAll('main input');
    for(var i=0;i<y.length;i++){
        y[i].checked = false;
    }

    for(var i=0;i<list.length;i++){
        list[i].className = list[i].className.replace('active', '');
    }
}

function reset(){
    var x = location.hash.substring(2)-1;
    var y = question[x].querySelectorAll('input');
    for(var i=0;i<y.length;i++){
        y[i].checked = false;
    }

    list[x].className = list[x].className.replace('active', '');
}