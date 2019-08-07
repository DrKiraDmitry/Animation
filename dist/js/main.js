var d= document.getElementById('DeusE').childElementCount - 1;
var i=0;
var tumbler=0;

function deus(){

    if(tumbler==0){
        document.getElementById('DeusE').children[i].classList.add('DeusExx');
        i++;
    }
    else{
        document.getElementById('DeusE').children[i].classList.remove('DeusExx');
        i--;
    };
    console.log(i);
    if(i==d){
        tumbler++;
    };
    if(i==0){
        tumbler--;
    };
};

setInterval(deus, 100);


