var d= document.getElementById('DeusE').childElementCount;
var i=0;
var tumbler=0;
var delay= 0;

function deus(){
    if(delay<100){
        delay++;
    }
    else
    if(delay=100){
        if(tumbler==0){
            document.getElementById('DeusE').children[i].classList.add('DeusExx');
            i++;
        }
        else{
            document.getElementById('DeusE').children[i-1].classList.remove('DeusExx');
            i--;
        };
        if(i==d){
            tumbler++;
            delay=0;
        };
        if(i==0){
            tumbler--;
            delay=0;
        };
    }
    
};

setInterval(deus, 100);

/**/

var men=0;

function menu(){
    if(men==0){
    document.getElementById('menu__bar').children[0].classList.add('bar1');
    document.getElementById('menu__bar').children[1].classList.add('bar2');
    document.getElementById('menu__bar').children[2].classList.add('bar3');
    document.getElementById('menu__mobile').classList.add('menu__mobileon');
    men++;
    }else{
        document.getElementById('menu__bar').children[0].classList.remove('bar1');
        document.getElementById('menu__bar').children[1].classList.remove('bar2');
        document.getElementById('menu__bar').children[2].classList.remove('bar3');
        document.getElementById('menu__mobile').classList.remove('menu__mobileon');
        men--;
    }   
}

