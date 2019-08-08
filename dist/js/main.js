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


